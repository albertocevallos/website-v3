export const projectsRoutes = [
	{
		label: "Overview",
		pages: [
			{ title: "Introduction", slug: "projects/overview/introduction" },
			{
				title: "Getting started",
				slug: "projects/overview/getting-started",
			},
			{
				title: "Accessibility",
				slug: "projects/overview/accessibility",
			},
			{ title: "Releases", slug: "projects/overview/releases" },
		],
	},

	{
		label: "Guides",
		pages: [
			{ title: "Styling", slug: "projects/guides/styling" },
			{ title: "Animation", slug: "projects/guides/animation" },
			{ title: "Composition", slug: "projects/guides/composition" },
			{
				title: "Server-side rendering",
				slug: "projects/guides/server-side-rendering",
			},
		],
	},

	{
		label: "Components",
		pages: [
			{ title: "Accordion", slug: "projects/components/accordion" },
			{
				title: "Alert Dialog",
				slug: "projects/components/alert-dialog",
			},
			{
				title: "Aspect Ratio",
				slug: "projects/components/aspect-ratio",
			},
			{ title: "Avatar", slug: "projects/components/avatar" },
			{ title: "Checkbox", slug: "projects/components/checkbox" },
			{ title: "Collapsible", slug: "projects/components/collapsible" },
			{
				title: "Context Menu",
				slug: "projects/components/context-menu",
			},
			{ title: "Dialog", slug: "projects/components/dialog" },
			{
				title: "Dropdown Menu",
				slug: "projects/components/dropdown-menu",
			},
			{ title: "Form", slug: "projects/components/form", preview: true },
			{ title: "Hover Card", slug: "projects/components/hover-card" },
			{ title: "Label", slug: "projects/components/label" },
			{ title: "Menubar", slug: "projects/components/menubar" },
			{
				title: "Navigation Menu",
				slug: "projects/components/navigation-menu",
			},
			{
				title: "One-Time Password Field",
				slug: "projects/components/one-time-password-field",
				preview: true,
			},
			{
				title: "Password Toggle Field",
				slug: "projects/components/password-toggle-field",
				preview: true,
			},
			{ title: "Popover", slug: "projects/components/popover" },
			{ title: "Progress", slug: "projects/components/progress" },
			{ title: "Radio Group", slug: "projects/components/radio-group" },
			{ title: "Scroll Area", slug: "projects/components/scroll-area" },
			{ title: "Select", slug: "projects/components/select" },
			{ title: "Separator", slug: "projects/components/separator" },
			{ title: "Slider", slug: "projects/components/slider" },
			{ title: "Switch", slug: "projects/components/switch" },
			{ title: "Tabs", slug: "projects/components/tabs" },
			{ title: "Toast", slug: "projects/components/toast" },
			{ title: "Toggle", slug: "projects/components/toggle" },
			{
				title: "Toggle Group",
				slug: "projects/components/toggle-group",
			},
			{ title: "Toolbar", slug: "projects/components/toolbar" },
			{ title: "Tooltip", slug: "projects/components/tooltip" },
		],
	},

	{
		label: "Utilities",
		pages: [
			{
				title: "Accessible Icon",
				slug: "projects/utilities/accessible-icon",
			},
			{
				title: "Direction Provider",
				slug: "projects/utilities/direction-provider",
			},
			{ title: "Portal", slug: "projects/utilities/portal" },
			{ title: "Slot", slug: "projects/utilities/slot" },
			{
				title: "Visually Hidden",
				slug: "projects/utilities/visually-hidden",
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
