// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
  id: number;
  title: string;
  imgurl: string;
  desc: string;
  siteurl: string;
  tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
  {
    id: 1,
    title: "夏川",
    imgurl: "https://q2.qlogo.cn/headimg_dl?dst_uin=3082425387&spec=100",
    desc: "夏川的个人网站",
    siteurl: "https://sakula.tk",
    tags: ["朋友", "个人网站"],
  },
  {
    id: 2,
    title: "花瓣",
    imgurl:
      "https://cdn.dancf.com/fe-assets/20260604/22e5e923d7f010990285340f6cb79f18ddf551de700b489ca316fe0f392fcfd9.svg",
    desc: "图像采集网站",
    siteurl: "https://huaban.com",
    tags: ["绘画参考", "设计参考"],
  },
  {
    id: 3,
    title: "Mizuki",
    imgurl: "https://mizuki.mysqil.com/assets/home/home.webp",
    desc: "一个开源博客模板演示网站",
    siteurl: "https://mizuki.mysqil.com/",
    tags: ["博客模板"],
  },
  {
    id: 4,
    title: "时终是区",
    imgurl:
      "https://github.cdn.zero251.xyz/Zero-wyc/Image/main/General/%E8%BE%9B.webp",
    desc: "时终是区的个人博客",
    siteurl: "https://blog.zero251.xyz/",
    tags: ["朋友", "个人博客"],
  },
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
  return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
  const shuffled = [...friendsData];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
