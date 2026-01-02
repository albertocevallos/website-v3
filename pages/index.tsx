import * as React from "react";
import { Container, Section } from "@radix-ui/themes";
import { Footer } from "@components/Footer";
import { MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { FancyBackground } from "@components/marketing/FancyBackground";
import { PrimitivesHero } from "@components/marketing/PrimitivesHero";
import { StatsSection } from "@components/marketing/StatsSection";
import { Box, Separator } from "@radix-ui/themes";
import { PrimitivesHeader } from "@components/PrimitivesHeader";
import { PrimitivesMobileMenu } from "@components/PrimitivesMobileMenu";

export default function PrimitivesHome() {
	return (
		<MobileMenuProvider>
			<PrimitivesMobileMenu />

			<TitleAndMetaTags
				title="Alberto Cevallos"
				description="Personal Website"
				image="thumb.svg"
			/>
			<Box style={{ height: 0 }}>
				<PrimitivesHeader ghost />
			</Box>
			<FancyBackground>
				<PrimitivesHero />
			</FancyBackground>
		</MobileMenuProvider>
	);
}
