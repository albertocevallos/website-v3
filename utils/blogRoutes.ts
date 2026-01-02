export const blogRoutes = [
	{
		label: "Overview",
		pages: [
			{ title: "Introduction", slug: "blog/overview/introduction" },
			{
				title: "Getting started",
				slug: "blog/overview/getting-started",
			},
			{
				title: "Accessibility",
				slug: "blog/overview/accessibility",
			},
			{ title: "Releases", slug: "blog/overview/releases" },
		],
	},

	{
		label: "Guides",
		pages: [
			{ title: "Styling", slug: "blog/guides/styling" },
			{ title: "Animation", slug: "blog/guides/animation" },
			{ title: "Composition", slug: "blog/guides/composition" },
			{
				title: "Server-side rendering",
				slug: "blog/guides/server-side-rendering",
			},
		],
	},

	{
		label: "Components",
		pages: [
			{ title: "Accordion", slug: "blog/components/accordion" },
			{
				title: "Alert Dialog",
				slug: "blog/components/alert-dialog",
			},
			{
				title: "Aspect Ratio",
				slug: "blog/components/aspect-ratio",
			},
			{ title: "Avatar", slug: "blog/components/avatar" },
			{ title: "Checkbox", slug: "blog/components/checkbox" },
			{ title: "Collapsible", slug: "blog/components/collapsible" },
			{
				title: "Context Menu",
				slug: "blog/components/context-menu",
			},
			{ title: "Dialog", slug: "blog/components/dialog" },
			{
				title: "Dropdown Menu",
				slug: "blog/components/dropdown-menu",
			},
			{ title: "Form", slug: "blog/components/form", preview: true },
			{ title: "Hover Card", slug: "blog/components/hover-card" },
			{ title: "Label", slug: "blog/components/label" },
			{ title: "Menubar", slug: "blog/components/menubar" },
			{
				title: "Navigation Menu",
				slug: "blog/components/navigation-menu",
			},
			{
				title: "One-Time Password Field",
				slug: "blog/components/one-time-password-field",
				preview: true,
			},
			{
				title: "Password Toggle Field",
				slug: "blog/components/password-toggle-field",
				preview: true,
			},
			{ title: "Popover", slug: "blog/components/popover" },
			{ title: "Progress", slug: "blog/components/progress" },
			{ title: "Radio Group", slug: "blog/components/radio-group" },
			{ title: "Scroll Area", slug: "blog/components/scroll-area" },
			{ title: "Select", slug: "blog/components/select" },
			{ title: "Separator", slug: "blog/components/separator" },
			{ title: "Slider", slug: "blog/components/slider" },
			{ title: "Switch", slug: "blog/components/switch" },
			{ title: "Tabs", slug: "blog/components/tabs" },
			{ title: "Toast", slug: "blog/components/toast" },
			{ title: "Toggle", slug: "blog/components/toggle" },
			{
				title: "Toggle Group",
				slug: "blog/components/toggle-group",
			},
			{ title: "Toolbar", slug: "blog/components/toolbar" },
			{ title: "Tooltip", slug: "blog/components/tooltip" },
		],
	},

	{
		label: "Utilities",
		pages: [
			{
				title: "Accessible Icon",
				slug: "blog/utilities/accessible-icon",
			},
			{
				title: "Direction Provider",
				slug: "blog/utilities/direction-provider",
			},
			{ title: "Portal", slug: "blog/utilities/portal" },
			{ title: "Slot", slug: "blog/utilities/slot" },
			{
				title: "Visually Hidden",
				slug: "blog/utilities/visually-hidden",
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
