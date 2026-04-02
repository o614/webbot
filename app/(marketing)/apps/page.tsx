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

      {/* 3. 搜索结果展示区 */}
      <div className="flex flex-col gap-8">
        
        {/* 🚀 移动端优化：手机上上下堆叠居中，平板上左右并排排列 */}
        <div className="flex flex-col items-center gap-4 rounded-lg border bg-card p-6 text-center shadow-sm sm:flex-row sm:items-start sm:gap-6 sm:text-left">
          <div className="h-24 w-24 shrink-0 rounded-[22px] border bg-muted/50 shadow-sm">
            {/* 图标占位 */}
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Shadowrocket</h2>
            {/* 修复文字过长导致手机端折行的问题 */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground sm:justify-start">
              <span>Shadow Launch Technology Limited</span>
              <span className="hidden sm:inline">•</span>
              <span className="rounded-md bg-muted px-2 py-0.5 sm:bg-transparent sm:p-0">工具</span>
            </div>
            <div className="mt-1 flex items-center justify-center gap-1 text-sm font-medium sm:justify-start">
              <span className="text-yellow-500">★★★★★</span>
              <span className="ml-1 text-muted-foreground">4.9 (1.2w 评分)</span>
            </div>
          </div>
        </div>

        {/* 🚀 移动端优化：给表格外层包了 overflow-x-auto，并给 table 加了 whitespace-nowrap（强制不换行） */}
        <div className="w-full overflow-x-auto rounded-md border shadow-sm">
          <table className="w-full whitespace-nowrap text-left text-sm">
            <thead className="border-b bg-muted/50 text-muted-foreground">
              <tr>
                <th className="h-12 px-4 align-middle font-medium">国家/地区</th>
                <th className="h-12 px-4 align-middle font-medium">当地价格</th>
                <th className="h-12 px-4 align-middle font-medium">折合人民币</th>
                <th className="h-12 px-4 align-middle text-right font-medium">操作</th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td className="flex items-center gap-2 p-4 align-middle font-medium">
                  <span>🇹🇷</span> 土耳其 (TR)
                </td>
                <td className="p-4 align-middle">TRY 19.99</td>
                <td className="p-4 align-middle font-bold text-green-600">¥ 4.85</td>
                <td className="p-4 align-middle text-right">
                  <button className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>
                    前往
                  </button>
                </td>
              </tr>
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td className="flex items-center gap-2 p-4 align-middle font-medium">
                  <span>🇨🇳</span> 中国大陆 (CN)
                </td>
                <td className="p-4 align-middle">CNY 18.00</td>
                <td className="p-4 align-middle font-bold">¥ 18.00</td>
                <td className="p-4 align-middle text-right">
                  <button className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>
                    前往
                  </button>
                </td>
              </tr>
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td className="flex items-center gap-2 p-4 align-middle font-medium">
                  <span>🇺🇸</span> 美国 (US)
                </td>
                <td className="p-4 align-middle">USD 2.99</td>
                <td className="p-4 align-middle font-bold text-red-500">¥ 21.50</td>
                <td className="p-4 align-middle text-right">
                  <button className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>
                    前往
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}
