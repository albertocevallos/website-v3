export const projectsRoutes = [
	{
		label: "2025",
		pages: [{ title: "Pye Finance", slug: "projects/2025/pye" }],
	},
	{
		label: "2023",
		pages: [
			{ title: "ApeWorx Plugins", slug: "projects/2023/apeworx-plugins" },
		],
	},

	{
		label: "2022",
		pages: [
			{ title: "eth-utils.com", slug: "projects/2022/eth-utils" },
			{ title: " MEV-Boost Bot", slug: "projects/2022/mev-boost-bot" },
			{ title: " tokenicons.org", slug: "projects/2022/token-icons" },
		],
	},
	{
		label: "2021",
		pages: [
			{
				title: "ForceDAO",
				slug: "projects/2021/forcedao",
			},
		],
	},
];

export type PageProps = {
	title: string;
	slug: string;
	deprecated?: boolean;
	preview?: boolean;
};

export type RouteProps = {
	label: string;
	pages: PageProps[];
};

export const allProjectsRoutes = projectsRoutes.reduce<
	{
		title: string;
		slug: string;
		deprecated?: boolean;
		preview?: boolean;
	}[]
>((acc, curr: RouteProps) => {
	return [...acc, ...curr.pages];
}, []);
