/* eslint-disable tailwindcss/classnames-order */
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "应用查价",
}

export default function AppsPage() {
  return (
    <div className="container max-w-[64rem] py-12 md:py-20">
      
      {/* 1. 顶部：极简搜索区 */}
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl">
          应用查价
        </h1>
        <p className="max-w-[42rem] px-2 leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          输入 App 名称或 App Store 链接，一键洞悉全球 150+ 国家真实差价。
        </p>

        <div className="relative mt-6 w-full max-w-2xl px-2 sm:px-0">
          <div className="pointer-events-none absolute inset-y-0 left-2 flex items-center pl-4 sm:left-0">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            className="flex h-14 w-full rounded-full border border-input bg-background px-14 py-3 text-base shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:px-12 sm:text-lg"
            placeholder="如：Shadowrocket 或 粘贴链接"
          />
          <button className={cn(buttonVariants({ size: "sm" }), "absolute right-4 top-2 h-10 rounded-full px-4 sm:right-2 sm:px-6")}>
            查询
          </button>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2 px-2">
          <span className="flex items-center text-sm text-muted-foreground">热门:</span>
          {["Shadowrocket", "Loon", "ChatGPT", "Minecraft"].map((tag) => (
            <span key={tag} className="inline-flex cursor-pointer items-center rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 sm:py-0.5">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <hr className="my-12 border-muted" />

      {/* 2. 搜索结果展示区 */}
      <div className="flex flex-col gap-6 sm:gap-8">
        
        {/* 应用卡片 */}
        <div className="flex items-center gap-4 rounded-lg border bg-card p-4 shadow-sm sm:gap-6 sm:p-6">
          <div className="h-16 w-16 shrink-0 rounded-2xl border bg-muted/50 shadow-sm sm:h-20 sm:w-20 sm:rounded-[22px]" />
          <div className="flex flex-col gap-1 sm:gap-1.5">
            <h2 className="text-lg font-bold sm:text-2xl">Shadowrocket</h2>
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground sm:text-sm">
              <span className="max-w-[140px] truncate sm:max-w-none">Shadow Launch Technology Limited</span>
              <span>•</span>
              <span className="rounded-md bg-secondary px-1.5 py-0.5">工具</span>
            </div>
            <div className="flex items-center gap-1 text-xs font-medium sm:text-sm">
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-muted-foreground">4.9 (1.2w)</span>
            </div>
          </div>
        </div>

        {/* 🚀 核心救场方案：剥壳版 Shadcn Table！不用引入任何不存在的组件，纯 HTML 1:1 像素级复刻 */}
        <div className="rounded-md border shadow-sm">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b bg-muted/50">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground w-[120px] sm:w-[150px] whitespace-nowrap">国家/地区</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground whitespace-nowrap">当地价格</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground whitespace-nowrap">折合人民币</th>
                  <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground whitespace-nowrap">操作</th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle flex items-center gap-2 font-medium whitespace-nowrap">
                    <span className="text-lg">🇹🇷</span> <span className="hidden sm:inline">土耳其 (TR)</span><span className="sm:hidden">TR</span>
                  </td>
                  <td className="p-4 align-middle text-muted-foreground whitespace-nowrap">TRY 19.99</td>
                  <td className="p-4 align-middle font-bold text-green-600 whitespace-nowrap">¥ 4.85</td>
                  <td className="p-4 align-middle text-right whitespace-nowrap">
                    <button className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "h-8 px-2 sm:px-3 text-xs")}>
                      前往
                    </button>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle flex items-center gap-2 font-medium whitespace-nowrap">
                    <span className="text-lg">🇨🇳</span> <span className="hidden sm:inline">中国大陆 (CN)</span><span className="sm:hidden">CN</span>
                  </td>
                  <td className="p-4 align-middle text-muted-foreground whitespace-nowrap">CNY 18.00</td>
                  <td className="p-4 align-middle font-bold whitespace-nowrap">¥ 18.00</td>
                  <td className="p-4 align-middle text-right whitespace-nowrap">
                    <button className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "h-8 px-2 sm:px-3 text-xs")}>
                      前往
                    </button>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle flex items-center gap-2 font-medium whitespace-nowrap">
                    <span className="text-lg">🇺🇸</span> <span className="hidden sm:inline">美国 (US)</span><span className="sm:hidden">US</span>
                  </td>
                  <td className="p-4 align-middle text-muted-foreground whitespace-nowrap">USD 2.99</td>
                  <td className="p-4 align-middle font-bold text-red-500 whitespace-nowrap">¥ 21.50</td>
                  <td className="p-4 align-middle text-right whitespace-nowrap">
                    <button className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "h-8 px-2 sm:px-3 text-xs")}>
                      前往
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}
