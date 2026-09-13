/**
 * 时间线页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/timelineConfig.ts 控制。
 */
import type { TimelineItem } from "@/types/timelineConfig";

export const timelineData: TimelineItem[] = [
	{
		title: "拥抱AI编程",
		date: "2025.09",
		category: "project",
		tags: ["策划", "vibe coding", "JAVA", "C/C++", "Python", "Vue", "HTML", "CSS", "JS", "MySQL"],
	},
	{
		title: "VRChat改模学习",
		date: "2026.06",
		category: "education",
		tags: ["Unity"],
	},
	{
		title: "我的世界整合包创作",
		date: "2025.04",
		category: "project",
		description: "不满意市面整合包，尝试自己整合",
	},
	{
		title: "奖学金",
		date: "2024.11",
		category: "milestone",
		subtitle: "广州新华学院",
		location: "广东东莞",
		description: "二等奖",
	},
	{
		title: "大学学习",
		date: "2022.09 – 2025.07",
		category: "education",
		subtitle: "广州新华学院/华南师范大学",
		location: "广东东莞",
		description: "在校学习编程知识",
		tags: ["JAVA", "C/C++", "Python", "Vue", "HTML", "CSS", "JS", "MySQL"],
	},
	{
		title: "小说创作",
		date: "2024.05",
		category: "project",
		description: "尝试创作OC小说",
	},
	{
		title: "初次编程",
		date: "2019.05 – 2020.08",
		category: "project",
		description: "使用手机AIDE开发了两款小软件：学习资源导航助手、宠物伤害计算工具",
	},
	{
		title: "游戏经历",
		date: "2016.07",
		category: "education",
		description: "累计游玩3000+款玩法类型各异的手游/端游",
		icon: "material-symbols:sports-esports-outline-rounded",
	},
	{
		title: "绘画经历",
		date: "2013.07",
		category: "education",
		description: "自学绘画",
		tags: ["绘画"],
		icon: "material-symbols:palette-outline-rounded",
	},
];

/** 获取所有时间线数据列表 */
export function getTimelineList(): TimelineItem[] {
	return timelineData;
}
