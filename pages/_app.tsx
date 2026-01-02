import * as React from "react";
import { AppProps } from "next/app";
import { Router, useRouter } from "next/router";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "@components/ThemeProvider";
/// START
import { BlogDocsPage } from "@components/BlogDocsPage";
import { ResearchDocsPage } from "@components/ResearchDocsPage";
import { ProjectsDocsPage } from "@components/ProjectsDocsPage";
/// END

import { handleUrlChange } from "@utils/analytics";
import { CssLibPreferenceProvider } from "@components/CssLibPreference";
import { Favicon } from "@components/Favicon";
import "@radix-ui/themes/styles.css";
import "./styles.css";
import "./syntax-highlighting.css";

function Pages({ Component, pageProps }: AppProps) {
	const router = useRouter();

	/// START

	if (router.pathname.startsWith("/blog")) {
		return (
			<Theme
				accentColor="blue"
				grayColor="slate"
				className="radix-themes-custom-fonts"
			>
				<BlogDocsPage>
					<Favicon />
					<Component {...pageProps} />
				</BlogDocsPage>
			</Theme>
		);
	}

	if (router.pathname.startsWith("/research")) {
		return (
			<Theme
				accentColor="blue"
				grayColor="slate"
				className="radix-themes-custom-fonts"
			>
				<ResearchDocsPage>
					<Favicon />
					<Component {...pageProps} />
				</ResearchDocsPage>
			</Theme>
		);
	}

	if (router.pathname.startsWith("/projects")) {
		return (
			<Theme
				accentColor="blue"
				grayColor="slate"
				className="radix-themes-custom-fonts"
			>
				<ProjectsDocsPage>
					<Favicon />
					<Component {...pageProps} />
				</ProjectsDocsPage>
			</Theme>
		);
	}
	/// END

	return (
		<Theme accentColor="indigo" className="radix-themes-custom-fonts">
			<Favicon />
			<Component {...pageProps} />
		</Theme>
	);
}

function App(props: AppProps) {
	useAnalytics();

	return (
		<CssLibPreferenceProvider>
			<ThemeProvider>
				<Pages {...props} />
			</ThemeProvider>
		</CssLibPreferenceProvider>
	);
}

export default App;

function useAnalytics() {
	React.useEffect(() => {
		Router.events.on("routeChangeComplete", handleUrlChange);
		return () => {
			Router.events.off("routeChangeComplete", handleUrlChange);
		};
	}, []);
}
