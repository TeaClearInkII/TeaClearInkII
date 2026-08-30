// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	visitUrl?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	showImage?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "teartcshare",
    title: "TeaRTC 屏幕共享",
    description:
      "基于IPv6的免费屏幕共享工具。多人实时屏幕共享与远程控制工具。共享端无需安装任何客户端，观看端只需一个浏览器，打开网址即可加入观看。",
    image: "",
    category: "web",
    techStack: ["Go", "HTML", "IPv6"],
    status: "in-progress",
    sourceCode: "https://github.com/TeaClearInkII/TeaRTC-Share",
    visitUrl: "",
    startDate: "2026-08-12",
    endDate: "",
    tags: ["Android", "Tool", "Window", "Web"],
    showImage: false,
  },
  {
    id: "sai2-drawingrecordingtool",
    title: "SAI2绘画录制工具",
    description: "支持任意SAI2版本以及任意绘画软件",
    image: "",
    category: "desktop",
    techStack: ["SAI2", "统计", "绘画", "录制"],
    status: "in-progress",
    sourceCode: "https://github.com/TeaClearInkII/SAI2-DrawingRecordingTool",
    visitUrl: "",
    startDate: "2026-05-20",
    endDate: "",
    tags: ["Tool", "Window", "SAI2", "Statistics", "Painting", "record"],
    showImage: false,
  },
  {
    id: "krita-statistics-plugin",
    title: "Krita绘画统计插件",
    description:
      "以相册形式展示 .kra 文件绘画统计信息的 Krita 停靠面板插件。自动扫描目录下的 .kra 文件，解析编辑时间和元数据，按年/月/日分组展示。",
    image: "",
    category: "other",
    techStack: ["Krita", "统计", "插件", "绘画"],
    status: "in-progress",
    sourceCode: "https://github.com/TeaClearInkII/Krita-Statistics-Plugin",
    visitUrl: "",
    startDate: "2026-07-20",
    endDate: "",
    tags: ["Tool", "Window", "Krita", "Statistics", "Plugin", "Painting"],
    showImage: false,
  },
  {
    id: "teaclearinkii",
    title: "茶清墨刂个人网站",
    description: "茶清墨刂的个人网站，用于展示作品和兴趣。",
    image: "",
    category: "other",
    techStack: ["个人网站"],
    status: "in-progress",
    sourceCode: "https://github.com/TeaClearInkII/TeaClearInkII",
    visitUrl: "",
    startDate: "2026-08-24",
    endDate: "",
    tags: [],
    showImage: false,
  },
  {
    id: "dsh-marketplaces-nexus",
    title: "DSH 万市枢纽",
    description: "一个DSH插件市场的市场集",
    image: "",
    category: "other",
    techStack: ["DSH Plugin", "Nexus"],
    status: "completed",
    sourceCode: "https://github.com/TeaClearInkII/DSH-Marketplaces-Nexus",
    visitUrl: "",
    startDate: "2026-08-12",
    endDate: "2026-08-26",
    tags: ["Tool", "Window", "DSH Plugin"],
    showImage: false,
  },
  {
    id: "folder-comparator-gui",
    title: "文件夹内容比较工具",
    description: "对比两个文件夹中的文件名称，分析差异文件",
    image: "",
    category: "desktop",
    techStack: ["Python", "QT", "文件夹"],
    status: "in-progress",
    sourceCode: "https://github.com/TeaClearInkII/Folder-Comparator-GUI",
    visitUrl: "",
    startDate: "2026-01-01",
    endDate: "",
    tags: ["Tool", "Window"],
    showImage: false,
  },
  {
    id: "minecraft-modside-analyzer",
    title: "我的世界模组端属分析工具",
    description:
      "一个用于分析 Minecraft 模组端属的 Python 工具，支持 Fabric、Forge、Quilt 模组，结合本地 JAR 解析和 Modrinth API 双重校验，自动分类并输出带置信度的分析结果。",
    image: "",
    category: "desktop",
    techStack: ["Python", "QT", "Minecraft", "Mod"],
    status: "in-progress",
    sourceCode: "https://github.com/TeaClearInkII/Minecraft-ModSide-Analyzer",
    visitUrl: "",
    startDate: "2026-01-01",
    endDate: "",
    tags: ["Tool", "Window", "Mod", "Minecraft"],
    showImage: false,
  },
  {
    id: "unity-modelrendertool-ironcreate",
    title: "Unity模型渲染截图插件",
    description: "可用于图标生成",
    image: "",
    category: "other",
    techStack: ["Unity", "VRChat", "图标", "插件"],
    status: "in-progress",
    sourceCode:
      "https://github.com/TeaClearInkII/Unity-ModelRenderTool-IronCreate",
    visitUrl: "",
    startDate: "2026-04-01",
    endDate: "",
    tags: ["Tool", "Window", "Unity", "VRChat", "iron", "Unity Editor"],
    showImage: false,
  },
  {
    id: "unity-animationbindingfixer",
    title: "Unity动画绑定修复插件",
    description: "可快捷修复修复因修改对象名称、层级导致的动画属性对象缺失",
    image: "",
    category: "other",
    techStack: ["Unity", "VRChat", "动画", "插件"],
    status: "in-progress",
    sourceCode: "https://github.com/TeaClearInkII/Unity-AnimationBindingFixer",
    visitUrl: "",
    startDate: "2026-04-01",
    endDate: "",
    tags: ["Tool", "Window", "Unity", "VRChat", "Animation", "Unity Editor"],
    showImage: false,
  },
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
