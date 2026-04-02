import Link from "next/link"

import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default async function IndexPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          
          {/* 顶部的胶囊小标签 */}
          <Link
            href={siteConfig.links.github}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            关注公众号 🍎 不要艾特我
          </Link>
          
          {/* 核心大标题 */}
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            全球数字游民的 <br className="hidden sm:block" />
            App Store 观测站
          </h1>
          
          {/* 灰色副标题 */}
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            在这里，我们打破区域限制。实时监测全球价格，一键切换商店生态，更有保姆级教程助你玩转海外 Apple 账号。
          </p>
          
          {/* 两个大按钮 */}
          <div className="space-x-4">
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
    </>
  )
}
