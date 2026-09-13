/**
 * 设备展示页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/devicesConfig.ts 控制。
 */
import type { DeviceItem } from "@/types/devicesConfig";

export const devicesData: DeviceItem[] = [
	{
		id: "honor-play4t-pro",
		name: "荣耀Play4T Pro",
		brand: "Honor",
		category: "mobile",
		status: "active",
		specs: "黑色 / 6 GB + 128 GB / 麒麟810",
		description: "什么时候换手机",
		image: "/images/device/荣耀Play4T-Pro.webp",
		year: "2020",
	},
	{
		id: "mechrevo-jiaolong-16pro-2024",
		name: "机械革命蛟龙16Pro 2024",
		brand: "Mechrevo",
		category: "desk",
		status: "active",
		specs: "银色 / 32 GB + 1 TB / AMD R7 7745HX + NVIDIA 4060",
		description: "最多跑9B AI模型，游戏压力小",
		image: "/images/device/机械革命蛟龙16Pro.jpg",
		year: "2024",
	},
	{
		id: "huawei-matepad-11",
		name: "华为MatePad 11 10.95",
		brand: "Huawei",
		category: "mobile",
		status: "active",
		specs: "白色 / 6 GB + 128 GB / 骁龙 865",
		description: "平板远控电脑很舒服，屏幕看视频很不错",
		image: "/images/device/HUAWEI_MatePad_Pro_11.png",
		year: "2021",
	},
];

/** 获取所有设备数据列表 */
export function getDevicesList(): DeviceItem[] {
	return devicesData;
}
