import * as React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { MDXProvider, components } from "@components/MDXComponents";
import { getAllFrontmatter, getMdxBySlug } from "@utils/mdx";
import { QuickNav } from "@components/QuickNav";
import { Box, Flex, Link, Text, Heading } from "@radix-ui/themes";
import { Avatar } from "@radix-ui/themes";
import { Separator } from "@radix-ui/themes";

import type { Frontmatter } from "types/frontmatter";
import { GetStaticPropsContext } from "next";
import { MarketingCaption } from "@components/marketing/MarketingCaption";

type Doc = {
	frontmatter: Frontmatter;
	code: string;
};

export default function OverviewDoc({ frontmatter, code }: Doc) {
	const Component = React.useMemo(() => getMDXComponent(code), [code]);

	return (
		<>
			<div data-algolia-lvl0 style={{ display: "none" }}>
				2025
			</div>

			<TitleAndMetaTags
				title={`${frontmatter.metaTitle} – Alberto Cevallos`}
				description={frontmatter.metaDescription}
				image="thumb.svg"
			/>

			<MDXProvider frontmatter={frontmatter}>
				<Box>
					<MDXProvider frontmatter={frontmatter}>
						<Component components={components as any} />
					</MDXProvider>
					<Flex align="center" gap="3" mt="8">
						<Avatar
							size="5"
							src={frontmatter.authorAvatarUrl as string}
							aria-label={frontmatter.author as string}
							fallback={null as any}
							radius="full"
						/>
						<Box id="author">
							<Text as="p" weight="bold">
								{frontmatter.author as string}
							</Text>
							<Text as="p">{frontmatter.authorPosition as string}</Text>
						</Box>
					</Flex>
					<Separator size="3" mt={{ initial: "7", md: "9" }} />
				</Box>
			</MDXProvider>

			<QuickNav key={frontmatter.slug} />
		</>
	);
}

export async function getStaticPaths() {
	const frontmatters = getAllFrontmatter("projects/2025");

	return {
		paths: frontmatters.map((frontmatter) => ({
			params: {
				slug: frontmatter.slug.replace("projects/2025/", ""),
			},
		})),
		fallback: false,
	};
}

export async function getStaticProps(
	context: GetStaticPropsContext<{ slug: string }>,
) {
	const { frontmatter, code } = await getMdxBySlug(
		"projects/2025/",
		context.params!.slug,
	);
	return { props: { frontmatter, code } };
}
