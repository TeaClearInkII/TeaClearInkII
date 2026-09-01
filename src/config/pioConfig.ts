import type { PioConfig } from "../types/config";

// Pio 看板娘配置
export const pioConfig: PioConfig = {
	enable: true, // 启用看板娘
	models: ["/pio/models/NOIR/noir.model3.json"], // 默认模型路径
	position: "left", // 模型位置
	width: 280, // 默认宽度
	height: 250, // 默认高度
	mode: "draggable", // 默认为可拖拽模式
	hiddenOnMobile: true, // 默认在移动设备上隐藏
	hideAboutMenu: false, // 隐藏内置 About 菜单按钮
	dialog: {
		welcome: "你好~欢迎来到茶茶的网站~♥", // 欢迎词
		touch: [
			"你想找什么吗？",
			"不要戳我啦",
			"HENTAI!",
			"咬你了！",
		], // 触摸提示
		home: "点击这里前往主页", // 首页提示
		skin: ["想要看看我的新衣服吗？", "这件新衣服看起来非常棒~"], // 换装提示
		close: "QWQ下次再见~", // 关闭提示
		link: "https://github.com/TeaClearInkII", // 关于链接
	},
};
