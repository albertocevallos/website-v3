import * as React from "react";
import { blogRoutes } from "@utils/blogRoutes";
import { researchRoutes } from "@utils/researchRoutes";
import { projectsRoutes } from "@utils/projectsRoutes";
import { Box, ScrollArea } from "@radix-ui/themes";
import { DocsNav } from "./DocsNav";
import { MobileMenu } from "./MobileMenu";
import { PrimitivesHeader } from "./PrimitivesHeader";
import { PrimitivesSearchMobile } from "./PrimitivesSearchMobile";
import {
	GitHubLogoIcon,
	LinkedInLogoIcon,
	TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { useRouter } from "next/router";

export const PrimitivesMobileMenu = () => {
	const router = useRouter();
	let currentRoutes: any[] = [];

	const [mobileSearchOpen, setMobileSearchOpen] = React.useState(false);

	if (router.pathname.startsWith("/blog")) {
		currentRoutes = blogRoutes;
	} else if (router.pathname.startsWith("/research")) {
		currentRoutes = researchRoutes;
	} else if (router.pathname.startsWith("/projects")) {
		currentRoutes = projectsRoutes;
	} else {
	}
	return (
		<MobileMenu>
			<PrimitivesHeader />
			<ScrollArea scrollbars="vertical">
				<Box pt="4" px="3" pb="9" style={{ maxWidth: "100vw" }}>
					<Box mb="4">
						<PrimitivesSearchMobile
							onSearchShow={() => setMobileSearchOpen(true)}
							onSearchHide={() => setMobileSearchOpen(false)}
						/>
					</Box>

					{!mobileSearchOpen && (
						<DocsNav
							routes={[
								{
									pages: [
										{
											title: "Homepage",
											slug: "primitives",
										},
										{
											title: "Blog",
											slug: "blog",
										},
										{
											title: "Research",
											slug: "research",
										},
										{
											title: "Projects",
											slug: "projects",
										},
									],
								},
								...currentRoutes,
								{
									label: "Resources",
									pages: [
										{
											title: "GitHub",
											slug: "https://github.com/albertoevallos",
											icon: <GitHubLogoIcon />,
										},
										{
											title: "X/Twitter",
											slug: "https://x.com/albertocevallos",
											icon: <TwitterLogoIcon />,
										},
										{
											title: "LinkedIn",
											slug: "https://www.linkedin.com/in/albertocevallos/",
											icon: <LinkedInLogoIcon />,
										},
									],
								},
							]}
						/>
					)}
				</Box>
			</ScrollArea>
		</MobileMenu>
	);
};
