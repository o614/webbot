import { MarketingConfig } from "types"

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: "应用查价",
      href: "/apps",
    },
    {
      title: "内购透视",
      href: "/iap",
    },
    {
      title: "实时榜单",
      href: "/charts",
    },
    {
      title: "极速切区",
      href: "/store",
    },
    {
      title: "免税地址",
      href: "/address",
    },
    {
      title: "教程中心",
      href: "/tutorials",
    },
    {
      title: "购买服务",
      href: "/pricing", // Taxonomy 默认有个超美的 pricing 页面，咱们直接用！
    },
  ],
}
