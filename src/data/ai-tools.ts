export type AIToolCategory =
	| "chat"
	| "coding"
	| "image"
	| "audio"
	| "video"
	| "writing"
	| "search"
	| "other";

export type AIToolFrequency =
	| "daily"
	| "weekly"
	| "occasional"
	| "experimental";

export type LocaleString = Partial<
	Record<"en" | "zh_CN" | "zh_TW" | "ja", string>
>;

export function getLocaleString(value: LocaleString, lang: string): string {
	return value[lang as keyof LocaleString] ?? value["en"] ?? "";
}

export interface AITool {
	id: string;
	name: string;
	description: LocaleString;
	icon: string;
	category: AIToolCategory;
	frequency: AIToolFrequency;
	url?: string;
	usage?: LocaleString;
	tags?: string[];
	color?: string;
}

// Replace the examples below with your own AI tools
export const aiToolsData: AITool[] = [
	{
		id: "deepseek",
		name: "DeepSeek",
		description: {
			en: "A conversational AI assistant for writing and reasoning.",
			zh_CN: "用于写作与推理的对话式 AI 助手。",
		},
		icon: "thesvg-color:deepseek",
		category: "chat",
		frequency: "daily",
		url: "https://chat.deepseek.com",
		usage: {
			en: "Daily: writing, brainstorming",
			zh_CN: "每天：写作、思路梳理",
		},
		tags: ["Chat"],
		color: "#5686FE",
	},
	{
		id: "opencode",
		name: "OpenCode",
		description: {
			en: "An open-source Agent tool",
			zh_CN: "开源的Agent工具",
		},
		icon: "vscode-icons:file-type-opencode",
		category: "coding",
		frequency: "weekly",
		url: "https://opencode.ai",
		usage: {
			en: "Weekly: project development, refactoring",
			zh_CN: "每周：项目开发、重构",
		},
		tags: ["Coding"],
		color: "#131010",
	},
	{
		id: "deepseek-harness",
		name: "DeepSeek Harness",
		description: {
			en: "An open-source Agent tool",
			zh_CN: "开源的Agent工具",
		},
		icon: "bxl:deepseek",
		category: "coding",
		frequency: "weekly",
		url: "https://www.deepseek.com/harness",
		usage: {
			en: "Weekly: project development, refactoring",
			zh_CN: "每周：项目开发、重构",
		},
		tags: ["Coding"],
		color: "#000000",
	},
	// {
	// 	id: "example-image",
	// 	name: "Example Image AI",
	// 	description: {
	// 		en: "An AI image generation tool for creating illustrations.",
	// 		zh_CN: "用于生成插图的 AI 图像工具。",
	// 	},
	// 	icon: "material-symbols:image",
	// 	category: "image",
	// 	frequency: "occasional",
	// 	url: "https://example.com",
	// 	tags: ["Image"],
	// 	color: "#1A73E8",
	// },
];
