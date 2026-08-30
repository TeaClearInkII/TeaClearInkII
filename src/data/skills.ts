// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
  id: string;
  name: string;
  description: string;
  icon: string; // Iconify icon name
  category: "frontend" | "backend" | "database" | "tools" | "other";
  level: "beginner" | "intermediate" | "advanced" | "expert";
  experience: {
    years: number;
    months: number;
  };
  projects?: string[]; // Related project IDs
  certifications?: string[];
  color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
  // Frontend Skills
  {
    id: "javascript",
    name: "JavaScript",
    description: "现代JavaScript开发，包括ES6+语法、异步编程和模块化开发。",
    icon: "logos:javascript",
    category: "frontend",
    level: "intermediate",
    experience: { years: 1, months: 0 },
    projects: [],
    color: "#F7DF1E",
  },
  {
    id: "typescript",
    name: "TypeScript",
    description: "一个类型安全的JavaScript超集，提升代码质量和开发效率。",
    icon: "logos:typescript-icon",
    category: "frontend",
    level: "intermediate",
    experience: { years: 1, months: 0 },
    projects: [],
    color: "#3178C6",
  },
  {
    id: "vue",
    name: "Vue.js",
    description: "一个易于学习和使用的渐进式JavaScript框架，适合快速开发。",
    icon: "logos:vue",
    category: "frontend",
    level: "intermediate",
    experience: { years: 1, months: 0 },
    projects: [],
    color: "#4FC08D",
  },

  // Backend Skills
  {
    id: "python",
    name: "Python",
    description:
      "一种适用于网页开发、数据分析、机器学习等多种用途的通用编程语言。",
    icon: "logos:python",
    category: "backend",
    level: "intermediate",
    experience: { years: 1, months: 0 },
    color: "#3776AB",
  },
  {
    id: "java",
    name: "Java",
    description: "一种主流的企业应用开发编程语言，支持跨平台和面向对象。",
    icon: "logos:java",
    category: "backend",
    level: "intermediate",
    experience: { years: 1, months: 0 },
    projects: [],
    color: "#ED8B00",
  },
  {
    id: "cpp",
    name: "C++",
    description:
      "一种高性能系统编程语言，广泛应用于游戏开发、系统软件和嵌入式开发。",
    icon: "logos:c-plusplus",
    category: "backend",
    level: "intermediate",
    experience: { years: 1, months: 0 },
    projects: [],
    color: "#00599C",
  },
  {
    id: "c",
    name: "C",
    description: "一种低级系统编程语言，是操作系统和嵌入式系统开发的基础。",
    icon: "logos:c",
    category: "backend",
    level: "intermediate",
    experience: { years: 1, months: 0 },
    projects: [],
    color: "#A8B9CC",
  },

  // Database Skills
  {
    id: "mysql",
    name: "MySQL",
    description:
      "全球最受欢迎的开源关系型数据库管理系统，广泛应用于网络应用中。",
    icon: "logos:mysql-icon",
    category: "database",
    level: "intermediate",
    experience: { years: 1, months: 0 },
    projects: ["e-commerce-platform", "blog-system"],
    color: "#4479A1",
  },

  // Tools
  {
    id: "git",
    name: "Git",
    description: "分布式版本控制系统，是代码管理和团队协作的重要工具。",
    icon: "logos:git-icon",
    category: "tools",
    level: "intermediate",
    experience: { years: 1, months: 0 },
    color: "#F05032",
  },
  {
    id: "vscode",
    name: "VS Code",
    description: "一个轻量但功能强大的代码编辑器，拥有丰富的插件生态系统。",
    icon: "logos:visual-studio-code",
    category: "tools",
    level: "advanced",
    experience: { years: 2, months: 0 },
    color: "#007ACC",
  },
  {
    id: "wechat-developer-tool",
    name: "微信开发者工具",
    description:
      "腾讯公司推出的一款集成开发环境（IDE），专门用于开发和调试微信小程序及小游戏。",
    icon: "fa7-brands:weixin",
    category: "tools",
    level: "intermediate",
    experience: { years: 2, months: 0 },
    color: "#03D96B",
  },
  {
    id: "pycharm",
    name: "PyCharm",
    description:
      "JetBrains 开发的专业 Python IDE，提供智能代码分析和调试功能。",
    icon: "logos:pycharm",
    category: "tools",
    level: "intermediate",
    experience: { years: 1, months: 0 },
    projects: [],
    color: "#21D789",
  },
  {
    id: "linux",
    name: "Linux",
    description: "开源操作系统，是服务器部署和开发环境的首选。",
    icon: "logos:linux-tux",
    category: "tools",
    level: "intermediate",
    experience: { years: 0, months: 6 },
    projects: ["server-management", "shell-scripting"],
    color: "#FCC624",
  },
  {
    id: "figma",
    name: "Figma",
    description: "一款用于UI/UX设计和原型设计的协作界面设计工具。",
    icon: "logos:figma",
    category: "tools",
    level: "intermediate",
    experience: { years: 0, months: 6 },
    color: "#F24E1E",
  },
  {
    id: "photoshop",
    name: "Photoshop",
    description: "专业图像编辑与设计软件。",
    icon: "logos:adobe-photoshop",
    category: "tools",
    level: "intermediate",
    experience: { years: 0, months: 2 },
    projects: [],
    color: "#31A8FF",
  },
  {
    id: "sai2",
    name: "SAI2",
    description: "专业绘画软件。",
    icon: "ix:palette",
    category: "tools",
    level: "intermediate",
    experience: { years: 1, months: 0 },
    projects: [],
    color: "#31A8FF",
  },
  {
    id: "capcut",
    name: "剪映",
    description: "专业的视频剪辑软件。",
    icon: "",
    category: "tools",
    level: "intermediate",
    experience: { years: 0, months: 6 },
    projects: [],
    color: "#FFFFFF",
  },
  {
    id: "blender",
    name: "Blender",
    description: "开源建模软件",
    icon: "logos:blender",
    category: "tools",
    level: "beginner",
    experience: { years: 0, months: 1 },
    projects: [],
    color: "#E87D0D",
  },
  {
    id: "unity",
    name: "Unity",
    description:
      "Unity是一个广泛使用的实时3D互动内容创作平台，它为多个领域的创作者提供了强大的工具和服务。",
    icon: "logos:unity",
    category: "tools",
    level: "beginner",
    experience: { years: 0, months: 1 },
    projects: [],
    color: "#E87D0D",
  },

  // Other Skills
];
