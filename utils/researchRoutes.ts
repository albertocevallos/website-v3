export const researchRoutes = [
	{
		label: "Overview",
		pages: [
			{ title: "Introduction", slug: "research/overview/introduction" },
			{
				title: "Getting started",
				slug: "research/overview/getting-started",
			},
			{
				title: "Accessibility",
				slug: "research/overview/accessibility",
			},
			{ title: "Releases", slug: "research/overview/releases" },
		],
	},

	{
		label: "Guides",
		pages: [
			{ title: "Styling", slug: "research/guides/styling" },
			{ title: "Animation", slug: "research/guides/animation" },
			{ title: "Composition", slug: "research/guides/composition" },
			{
				title: "Server-side rendering",
				slug: "research/guides/server-side-rendering",
			},
		],
	},

	{
		label: "Components",
		pages: [
			{ title: "Accordion", slug: "research/components/accordion" },
			{
				title: "Alert Dialog",
				slug: "research/components/alert-dialog",
			},
			{
				title: "Aspect Ratio",
				slug: "research/components/aspect-ratio",
			},
			{ title: "Avatar", slug: "research/components/avatar" },
			{ title: "Checkbox", slug: "research/components/checkbox" },
			{ title: "Collapsible", slug: "research/components/collapsible" },
			{
				title: "Context Menu",
				slug: "research/components/context-menu",
			},
			{ title: "Dialog", slug: "research/components/dialog" },
			{
				title: "Dropdown Menu",
				slug: "research/components/dropdown-menu",
			},
			{ title: "Form", slug: "research/components/form", preview: true },
			{ title: "Hover Card", slug: "research/components/hover-card" },
			{ title: "Label", slug: "research/components/label" },
			{ title: "Menubar", slug: "research/components/menubar" },
			{
				title: "Navigation Menu",
				slug: "research/components/navigation-menu",
			},
			{
				title: "One-Time Password Field",
				slug: "research/components/one-time-password-field",
				preview: true,
			},
			{
				title: "Password Toggle Field",
				slug: "research/components/password-toggle-field",
				preview: true,
			},
			{ title: "Popover", slug: "research/components/popover" },
			{ title: "Progress", slug: "research/components/progress" },
			{ title: "Radio Group", slug: "research/components/radio-group" },
			{ title: "Scroll Area", slug: "research/components/scroll-area" },
			{ title: "Select", slug: "research/components/select" },
			{ title: "Separator", slug: "research/components/separator" },
			{ title: "Slider", slug: "research/components/slider" },
			{ title: "Switch", slug: "research/components/switch" },
			{ title: "Tabs", slug: "research/components/tabs" },
			{ title: "Toast", slug: "research/components/toast" },
			{ title: "Toggle", slug: "research/components/toggle" },
			{
				title: "Toggle Group",
				slug: "research/components/toggle-group",
			},
			{ title: "Toolbar", slug: "research/components/toolbar" },
			{ title: "Tooltip", slug: "research/components/tooltip" },
		],
	},

	{
		label: "Utilities",
		pages: [
			{
				title: "Accessible Icon",
				slug: "research/utilities/accessible-icon",
			},
			{
				title: "Direction Provider",
				slug: "research/utilities/direction-provider",
			},
			{ title: "Portal", slug: "research/utilities/portal" },
			{ title: "Slot", slug: "research/utilities/slot" },
			{
				title: "Visually Hidden",
				slug: "research/utilities/visually-hidden",
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

export const allResearchRoutes = researchRoutes.reduce<
	{
		title: string;
		slug: string;
		deprecated?: boolean;
		preview?: boolean;
	}[]
>((acc, curr: RouteProps) => {
	return [...acc, ...curr.pages];
}, []);
