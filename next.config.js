const path = require("path");
const { globSync } = require("glob");
const compareVersions = require("compare-versions");

module.exports = {
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.mjs/,
			include: /node_modules/,
			type: "javascript/auto",
		});
		return config;
	},

	// Next.js config
	async redirects() {
		return [
		
			{
				source: "/docs/primitives",
				destination: "/primitives/docs/overview/introduction",
				permanent: false,
			},
			{
				source: "/docs/primitives/utilities/aspect-ratio/:slug*",
				destination: "/primitives/docs/components/aspect-ratio",
				permanent: true,
			},
			{
				source: "/docs/primitives/utilities/label/:slug*",
				destination: "/primitives/docs/components/label",
				permanent: true,
			},
			{
				source: "/primitives/docs/components/:slug/:version",
				destination: "/primitives/docs/components/:slug",
				permanent: true,
			},
			{
				source: "/primitives/docs/utilities/:slug/:version",
				destination: "/primitives/docs/utilities/:slug",
				permanent: true,
			},
			{
				source: "/docs/primitives/:slug*",
				destination: "/primitives/docs/:slug*",
				permanent: true,
			},
			{
				source: "/primitives/docs",
				destination: "/primitives/docs/overview/introduction",
				permanent: false,
			},
			{
				source: "/home",
				destination: "/",
				permanent: false,
			},

				/// START

			{
				source: "/blog",
				destination: "/blog/overview/introduction",
				permanent: false,
			},
			{
				source: "/research",
				destination: "/research/overview/introduction",
				permanent: false,
			},
			{
				source: "/projects",
				destination: "/projects/overview/introduction",
				permanent: false,
			},
			

			/// END
		];
	},
};
