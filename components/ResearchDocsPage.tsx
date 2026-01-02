import { Box, Flex, ScrollArea } from "@radix-ui/themes";
import { DocsPagination } from "@components/DocsPagination";
import { PrimitivesHeader } from "@components/PrimitivesHeader";
import { allResearchRoutes, researchRoutes } from "@utils/researchRoutes";
import { DocsNav } from "./DocsNav";
import { MobileMenuProvider } from "./MobileMenu";
import { SideNav } from "./SideNav";
import { PrimitivesSearchDesktop } from "./PrimitivesSearchDesktop";
import { DocsPageWrapper } from "./DocsPageWrapper";
import { EditPageLink } from "./EditPageLink";
import { PrimitivesMobileMenu } from "./PrimitivesMobileMenu";

export function ResearchDocsPage({ children }: { children: React.ReactNode }) {
	return (
		<MobileMenuProvider>
			<PrimitivesHeader />
			<PrimitivesMobileMenu />

			<Flex>
				<SideNav>
					<Box pt="4" px="3" pb="9">
						<Box mb="4">
							<PrimitivesSearchDesktop />
						</Box>

						<DocsNav routes={researchRoutes} />
					</Box>
				</SideNav>

				<DocsPageWrapper>
					<Box data-algolia-page-scope>{children}</Box>
					<DocsPagination allRoutes={allResearchRoutes} />
					<EditPageLink />
				</DocsPageWrapper>
			</Flex>
		</MobileMenuProvider>
	);
}
