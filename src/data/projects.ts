/**
 * 项目页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/projectsConfig.ts 控制。
 */
import type { ProjectItem } from "@/types/projectsConfig";

export const projectsData: ProjectItem[] = [
	{
		key: "teartcshare",
		title: "TeaRTC 屏幕共享",
		summary: "基于IPv6的免费屏幕共享工具。多人实时屏幕共享与远程控制工具。共享端无需安装任何客户端，观看端只需一个浏览器，打开网址即可加入观看。",
		category: "web",
		phase: "building",
		technologies: ["Go", "HTML", "IPv6"],
		icon: "material-symbols:share-outline-rounded",
		repository: "https://github.com/TeaClearInkII/TeaRTC-Share",
		year: "2026.08",
	},
	{
		key: "sai2-drawingrecordingtool",
		title: "SAI2绘画录制工具",
		summary: "支持任意SAI2版本以及任意绘画软件",
		category: "desktop",
		phase: "building",
		technologies: ["SAI2", "Statistics", "Painting", "Recording"],
		icon: "material-symbols:draw-rounded",
		repository: "https://github.com/TeaClearInkII/SAI2-DrawingRecordingTool",
		year: "2026.05",
	},
	{
		key: "krita-statistics-plugin",
		title: "Krita绘画统计插件",
		summary: "以相册形式展示 .kra 文件绘画统计信息的 Krita 停靠面板插件。自动扫描目录下的 .kra 文件，解析编辑时间和元数据，按年/月/日分组展示。",
		category: "tool",
		phase: "building",
		technologies: ["Krita", "Statistics", "Plugin", "Painting"],
		icon: "material-symbols:monitoring-rounded",
		repository: "https://github.com/TeaClearInkII/Krita-Statistics-Plugin",
		year: "2026.07",
	},
	{
		key: "teaclearinkii",
		title: "茶清墨刂个人网站",
		summary: "茶清墨刂的个人网站，用于展示作品和兴趣。",
		category: "web",
		phase: "building",
		technologies: ["Astro", "Personal Website"],
		icon: "material-symbols:language-rounded",
		repository: "https://github.com/TeaClearInkII/TeaClearInkII",
		year: "2026.08",
	},
	{
		key: "dsh-marketplaces-nexus",
		title: "DSH 万市枢纽",
		summary: "一个DSH插件市场的市场集",
		category: "tool",
		phase: "shipped",
		technologies: ["DSH Plugin", "Nexus"],
		icon: "material-symbols:storefront-rounded",
		repository: "https://github.com/TeaClearInkII/DSH-Marketplaces-Nexus",
		year: "2026.08",
	},
	{
		key: "folder-comparator-gui",
		title: "文件夹内容比较工具",
		summary: "对比两个文件夹中的文件名称，分析差异文件",
		category: "desktop",
		phase: "building",
		technologies: ["Python", "QT"],
		icon: "material-symbols:folder-compare-rounded",
		repository: "https://github.com/TeaClearInkII/Folder-Comparator-GUI",
		year: "2026.01",
	},
	{
		key: "minecraft-modside-analyzer",
		title: "我的世界模组端属分析工具",
		summary: "一个用于分析 Minecraft 模组端属的 Python 工具，支持 Fabric、Forge、Quilt 模组，结合本地 JAR 解析和 Modrinth API 双重校验，自动分类并输出带置信度的分析结果。",
		category: "desktop",
		phase: "building",
		technologies: ["Python", "QT", "Minecraft"],
		icon: "material-symbols:manufacturing-rounded",
		repository: "https://github.com/TeaClearInkII/Minecraft-ModSide-Analyzer",
		year: "2026.01",
	},
	{
		key: "unity-modelrendertool-ironcreate",
		title: "Unity模型渲染截图插件",
		summary: "可用于图标生成",
		category: "tool",
		phase: "building",
		technologies: ["Unity", "VRChat", "Plugin"],
		icon: "material-symbols:image-outline-rounded",
		repository: "https://github.com/TeaClearInkII/Unity-ModelRenderTool-IronCreate",
		year: "2026.04",
	},
	{
		key: "unity-animationbindingfixer",
		title: "Unity动画绑定修复插件",
		summary: "可快捷修复修复因修改对象名称、层级导致的动画属性对象缺失",
		category: "tool",
		phase: "building",
		technologies: ["Unity", "VRChat", "Animation"],
		icon: "material-symbols:link-rounded",
		repository: "https://github.com/TeaClearInkII/Unity-AnimationBindingFixer",
		year: "2026.04",
	},
];

/** 获取所有项目数据列表 */
export function getProjectsList(): ProjectItem[] {
	return projectsData;
}
