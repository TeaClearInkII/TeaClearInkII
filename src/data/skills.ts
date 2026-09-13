/**
 * 技能页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/skillsConfig.ts 控制。
 */
import type { SkillItem } from "@/types/skillsConfig";

export const skillsData: SkillItem[] = [
	{
		name: "JavaScript",
		description: "现代JavaScript开发，包括ES6+语法、异步编程和模块化开发。",
		icon: "simple-icons:javascript",
		category: "frontend",
		level: "intermediate",
	},
	{
		name: "TypeScript",
		description: "一个类型安全的JavaScript超集，提升代码质量和开发效率。",
		icon: "simple-icons:typescript",
		category: "frontend",
		level: "intermediate",
	},
	{
		name: "Vue.js",
		description: "一个易于学习和使用的渐进式JavaScript框架，适合快速开发。",
		icon: "simple-icons:vuedotjs",
		category: "frontend",
		level: "intermediate",
	},
	{
		name: "Python",
		description: "一种适用于网页开发、数据分析、机器学习等多种用途的通用编程语言。",
		icon: "simple-icons:python",
		category: "backend",
		level: "intermediate",
	},
	{
		name: "Java",
		description: "一种主流的企业应用开发编程语言，支持跨平台和面向对象。",
		icon: "simple-icons:openjdk",
		category: "backend",
		level: "intermediate",
	},
	{
		name: "C++",
		description: "一种高性能系统编程语言，广泛应用于游戏开发、系统软件和嵌入式开发。",
		icon: "simple-icons:cplusplus",
		category: "backend",
		level: "intermediate",
	},
	{
		name: "C",
		description: "一种低级系统编程语言，是操作系统和嵌入式系统开发的基础。",
		icon: "simple-icons:c",
		category: "backend",
		level: "intermediate",
	},
	{
		name: "MySQL",
		description: "全球最受欢迎的开源关系型数据库管理系统，广泛应用于网络应用中。",
		icon: "simple-icons:mysql",
		category: "backend",
		level: "intermediate",
	},
	{
		name: "Git",
		description: "分布式版本控制系统，是代码管理和团队协作的重要工具。",
		icon: "simple-icons:git",
		category: "tooling",
		level: "intermediate",
	},
	{
		name: "VS Code",
		description: "一个轻量但功能强大的代码编辑器，拥有丰富的插件生态系统。",
		icon: "simple-icons:visualstudiocode",
		category: "tooling",
		level: "advanced",
	},
	{
		name: "微信开发者工具",
		description: "腾讯公司推出的一款集成开发环境（IDE），专门用于开发和调试微信小程序及小游戏。",
		icon: "simple-icons:wechat",
		category: "tooling",
		level: "intermediate",
	},
	{
		name: "PyCharm",
		description: "JetBrains 开发的专业 Python IDE，提供智能代码分析和调试功能。",
		icon: "simple-icons:pycharm",
		category: "tooling",
		level: "intermediate",
	},
	{
		name: "Linux",
		description: "开源操作系统，是服务器部署和开发环境的首选。",
		icon: "simple-icons:linux",
		category: "tooling",
		level: "intermediate",
	},
	{
		name: "Figma",
		description: "一款用于UI/UX设计和原型设计的协作界面设计工具。",
		icon: "simple-icons:figma",
		category: "tooling",
		level: "intermediate",
	},
	{
		name: "Photoshop",
		description: "专业图像编辑与设计软件。",
		icon: "simple-icons:adobephotoshop",
		category: "tooling",
		level: "intermediate",
	},
	{
		name: "SAI2",
		description: "专业绘画软件。",
		icon: "material-symbols:palette-outline-rounded",
		category: "tooling",
		level: "intermediate",
	},
	{
		name: "剪映",
		description: "专业的视频剪辑软件。",
		icon: "material-symbols:movie-edit-outline-rounded",
		category: "tooling",
		level: "intermediate",
	},
	{
		name: "Blender",
		description: "开源建模软件",
		icon: "simple-icons:blender",
		category: "tooling",
		level: "beginner",
	},
	{
		name: "Unity",
		description: "Unity是一个广泛使用的实时3D互动内容创作平台，它为多个领域的创作者提供了强大的工具和服务。",
		icon: "simple-icons:unity",
		category: "tooling",
		level: "beginner",
	},
];

/** 获取所有技能数据列表 */
export function getSkillsList(): SkillItem[] {
	return skillsData;
}
