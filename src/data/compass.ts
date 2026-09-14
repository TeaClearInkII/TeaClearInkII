/**
 * 站点罗盘数据（本地数据源）。
 * 用途：src/pages/compass.astro → organisms/CompassSection → molecules/CompassTile。
 * 添加站点：往对应 Shelf.entries 追加一项；数组顺序即展示顺序。
 * - icon：Iconify 名（material-symbols:xxx）或图片 URL（http(s)/绝对路径）；
 *   省略时瓷砖显示 label 首字母 tonal 块（不自动抓取 favicon）。
 * - image：用户自定义图片 URL（http(s)/绝对路径），优先于 icon 渲染；
 *   加载失败自动降级为首字母块。
 */

/** 单条站点记录 */
export interface CompassEntry {
	/** 站点名（瓷砖标题） */
	label: string;
	/** 外链地址 */
	href: string;
	/** 一句话说明（瓷砖副行；省略则显示域名） */
	note?: string;
	/** 图标：Iconify 名或图片 URL；省略 = 首字母兜底 */
	icon?: string;
	/** 用户自定义图片（http(s)/绝对路径）：优先于 icon 渲染；省略则走 icon/首字母 */
	image?: string;
}

/** 分组（Shelf = 罗盘上的收纳格） */
export interface CompassShelf {
	/** 锚点 id（字母数字，作分组定位与跳转） */
	key: string;
	/** 分组名 */
	name: string;
	/** 分组图标（Iconify 名，SectionTitle 行首） */
	icon?: string;
	/** 分组副文案（标题下弱文本，可选） */
	blurb?: string;
	entries: CompassEntry[];
}

export const compassData: CompassShelf[] = [
	{
		key: "sites",
		name: "常用站点",
		entries: [
			{
				label: "花瓣",
				href: "https://huaban.com",
				note: "图像采集网站",
				image: "https://cdn.dancf.com/fe-assets/20260604/22e5e923d7f010990285340f6cb79f18ddf551de700b489ca316fe0f392fcfd9.svg",
			},
		],
	{
		key: "ai-tools",
		name: "AI 工具",
		entries: [
			{
				label: "DeepSeek",
				href: "https://chat.deepseek.com",
				note: "用于写作与推理的对话式 AI 助手",
				icon: "material-symbols:chat-bubble-outline-rounded",
			},
			{
				label: "OpenCode",
				href: "https://opencode.ai",
				note: "开源的 Agent 工具",
				icon: "material-symbols:terminal-rounded",
			},
			{
				label: "DeepSeek Harness",
				href: "https://www.deepseek.com/harness",
				note: "开源的 Agent 工具",
				icon: "material-symbols:robot-2-outline-rounded",
			},
		],
	},
	},
];
