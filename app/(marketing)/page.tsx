import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { BarChart3, Globe, MapPin, Search, ShieldCheck, Zap } from "lucide-react"

export default async function IndexPage() {
  return (
    <>
      <section className="relative flex min-h-[75vh] flex-col items-center justify-center space-y-6 pb-8 pt-12 md:minh-[calc(100vh-4rem)] md:pb-12 md:pt-10">
        
        {/* 🎇 苹果风高斯模糊光晕（已彻底去色，改为高级银灰色微光） */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
          <div className="h-[20rem] w-[20rem] rounded-full bg-slate-200/50 blur-[100px] dark:bg-slate-800/40 md:h-[40rem] md:w-[40rem]" />
        </div>

        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={siteConfig.links.github}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium transition-colors hover:bg-secondary"
            target="_blank"
          >
            关注公众号 🍎 不要艾特我
          </Link>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            全球数字游民的 <br className="hidden sm:block" />
            App Store 观测站
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            在这里，我们打破区域限制。实时监测全球价格，一键切换商店生态，更有保姆级教程助你玩转海外 Apple 账号。
          </p>
          <div className="space-x-4 mt-4">
            <Link href="/apps" className={cn(buttonVariants({ size: "lg" }))}>
              开始探索
            </Link>
            <Link
              href="/tutorials"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              核心教程
            </Link>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="flex flex-col items-center justify-center space-y-6 bg-slate-50 py-16 dark:bg-transparent md:min-h-screen md:py-12"
      >
        <div className="container mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            六大核心引擎
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            告别繁琐折腾，我们为你准备了最趁手的工具集，一站式解决所有跨区生态难题。
          </p>
        </div>
        
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          
          <div className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Search className="h-10 w-10 text-foreground" />
              <div className="space-y-2">
                <h3 className="font-bold">应用查价</h3>
                <p className="text-sm text-muted-foreground">一键洞察全球 App 价格，规避高价汇率区。</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <ShieldCheck className="h-10 w-10 text-foreground" />
              <div className="space-y-2">
                <h3 className="font-bold">内购透视</h3>
                <p className="text-sm text-muted-foreground">提前解密隐藏的订阅与内购项目，拒绝流氓扣费。</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <BarChart3 className="h-10 w-10 text-foreground" />
              <div className="space-y-2">
                <h3 className="font-bold">实时榜单</h3>
                <p className="text-sm text-muted-foreground">观测美日韩等核心区排行榜，把握第一手流行趋势。</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Globe className="h-10 w-10 text-foreground" />
              <div className="space-y-2">
                <h3 className="font-bold">极速切区</h3>
                <p className="text-sm text-muted-foreground">无需手动输入密码，扫码直接跳转目标国家应用商店。</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <MapPin className="h-10 w-10 text-foreground" />
              <div className="space-y-2">
                <h3 className="font-bold">免税地址</h3>
                <p className="text-sm text-muted-foreground">智能生成美区免税州账单地址，内购充值不花冤枉钱。</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Zap className="h-10 w-10 text-foreground" />
              <div className="space-y-2">
                <h3 className="font-bold">专家服务</h3>
                <p className="text-sm text-muted-foreground">从纯净 ID 注册到高阶代付解封，一对一专属私人支持。</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
