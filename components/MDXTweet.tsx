import React, { useEffect, useRef, useState } from "react";
import { Tweet as MdxTweet } from "mdx-embed";

type Props = React.ComponentProps<typeof MdxTweet>;

export default function TweetWrapper(props: Props) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	// Force remount of the inner Tweet component on each route change
	const [key, setKey] = useState(0);

	useEffect(() => {
		// Increment key to force remount of MdxTweet when tweetLink changes
		setKey((k) => k + 1);
	}, [props.tweetLink]);

	useEffect(() => {
		if (typeof window === "undefined") return;

		let cancelled = false;
		let intervalId: number | null = null;
		let onloadHandler: (() => void) | null = null;
		let timeoutId: number | null = null;

		const tryLoad = (): boolean => {
			const tw = (window as any).twttr;
			if (tw && tw.widgets && typeof tw.widgets.load === "function") {
				// Check if there's a blockquote to convert (the raw tweet embed)
				const hasBlockquote = containerRef.current?.querySelector(
					'blockquote.twitter-tweet',
				);
				if (hasBlockquote) {
					try {
						tw.widgets.load(containerRef.current ?? undefined);
					} catch (e) {
						// ignore - best effort
					}
					return true;
				}
			}
			return false;
		};

		// Delay initial check to allow MdxTweet to render the blockquote
		timeoutId = window.setTimeout(() => {
			if (cancelled) return;

			// If already available and blockquote exists, run immediately
			if (tryLoad()) return;

			// If the twitter widgets script exists but hasn't loaded yet, attach an onload
			const script = document.querySelector(
				'script[src*="platform.twitter.com/widgets.js"]',
			) as HTMLScriptElement | null;

			if (script) {
				onloadHandler = () => {
					if (cancelled) return;
					tryLoad();
				};
				script.addEventListener("load", onloadHandler);
				// also poll a little in case the script is already loaded but twttr isn't on window yet
				let tries = 0;
				intervalId = window.setInterval(() => {
					if (cancelled) return;
					if (tryLoad() || ++tries > 15) {
						if (intervalId) clearInterval(intervalId);
					}
				}, 200) as unknown as number;
			} else {
				// No script present yet: inject the twitter widgets script and poll for twttr
				const injected = document.createElement("script");
				injected.src = "https://platform.twitter.com/widgets.js";
				injected.async = true;
				injected.charset = "utf-8";
				// when it loads, try to initialize
				onloadHandler = () => {
					if (cancelled) return;
					tryLoad();
				};
				injected.addEventListener("load", onloadHandler);
				document.body.appendChild(injected);

				let tries = 0;
				intervalId = window.setInterval(() => {
					if (cancelled) return;
					if (tryLoad() || ++tries > 30) {
						if (intervalId) clearInterval(intervalId);
					}
				}, 150) as unknown as number;
			}
		}, 50); // Small delay to ensure React has rendered the MdxTweet content

		return () => {
			cancelled = true;
			if (timeoutId) clearTimeout(timeoutId);
			if (intervalId) clearInterval(intervalId);
			const script = document.querySelector(
				'script[src*="platform.twitter.com/widgets.js"]',
			) as HTMLScriptElement | null;
			if (script && onloadHandler)
				script.removeEventListener("load", onloadHandler);
		};
	}, [props.tweetLink, key]);

	return (
		<div ref={containerRef}>
			<MdxTweet key={key} {...props} />
		</div>
	);
}
