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
				destination: "/projects/2025/pye",
				permanent: true,
			},
			/// END
		];
	},
};
