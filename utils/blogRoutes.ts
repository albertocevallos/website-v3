export const blogRoutes = [
	{
		label: "Overview",
		pages: [{ title: "Introduction", slug: "blog/overview/introduction" }],
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

export const allBlogRoutes = blogRoutes.reduce<
	{
		title: string;
		slug: string;
		deprecated?: boolean;
		preview?: boolean;
	}[]
>((acc, curr: RouteProps) => {
	return [...acc, ...curr.pages];
}, []);
