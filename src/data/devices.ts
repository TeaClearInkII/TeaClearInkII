// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
  设备: [
    {
      name: "荣耀Play4T Pro",
      image: "/images/device/荣耀Play4T-Pro.webp",
      specs: "黑色 / 6 GB + 128 GB / 麒麟810",
      description: "什么时候换手机",
      link: "",
    },
    {
      name: "机械革命蛟龙16Pro 2024",
      image: "/images/device/机械革命蛟龙16Pro.jpg",
      specs: "银色 / 32 GB + 1 TB / AMD R7 7745HX + NVIDIA 4060",
      description: "最多跑9B AI模型，游戏压力小",
      link: "",
    },
    {
      name: "华为MatePad 11 10.95",
      image: "/images/device/HUAWEI_MatePad_Pro_11.png",
      specs: "白色 / 6 GB + 128 GB / 骁龙 865",
      description: "平板远控电脑很舒服，屏幕看视频很不错",
      link: "",
    },
  ],
};
