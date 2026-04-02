import { Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
// 假设模板里有 Input 组件（通常在 components/ui/input.tsx），咱们先用原生 HTML+Tailwind 模拟出 Shadcn 的标准样式，保证 100% 不报错
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
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          输入 App 名称或 App Store 链接，一键洞悉全球 150+ 国家真实差价。
        </p>

        {/* 完美复刻 Shadcn 风格的巨大搜索框 */}
        <div className="relative mt-6 w-full max-w-2xl">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            className="flex h-14 w-full rounded-full border border-input bg-background px-12 py-3 text-lg ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-sm"
            placeholder="例如：Shadowrocket 或 https://apps.apple.com/..."
          />
          <button className={cn(buttonVariants({ size: "sm" }), "absolute right-2 top-2 h-10 rounded-full px-6")}>
            查询
          </button>
        </div>

        {/* 搜索建议 Tag (直接用原生的极其克制的胶囊样式) */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <span className="text-sm text-muted-foreground">热门查询:</span>
          {["Shadowrocket", "Loon", "ChatGPT", "Minecraft"].map((tag) => (
            <span key={tag} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary cursor-pointer">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 2. 分割线 */}
      <hr className="my-12 border-muted" />

      {/* 3. 搜索结果展示区 (假数据 Mock) */}
      <div className="flex flex-col gap-8">
        
        {/* App 基本信息卡片 */}
        <div className="flex items-start gap-6 rounded-lg border bg-card p-6 shadow-sm">
          <div className="h-24 w-24 shrink-0 rounded-[22px] bg-muted/50 border shadow-sm">
            {/* 这里将来放 App 图标，现在先空着 */}
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Shadowrocket</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Shadow Launch Technology Limited</span>
              <span>•</span>
              <span>工具</span>
            </div>
            <div className="mt-1 flex items-center gap-1 text-sm font-medium">
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-muted-foreground ml-1">4.9 (1.2w 评分)</span>
            </div>
          </div>
        </div>

        {/* 全球价格对比表格 (严格使用 Taxonomy 后台的极简细线表格规范) */}
        <div className="rounded-md border">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/50 text-muted-foreground border-b">
              <tr>
                <th className="h-12 px-4 align-middle font-medium">国家/地区</th>
                <th className="h-12 px-4 align-middle font-medium">当地价格</th>
                <th className="h-12 px-4 align-middle font-medium">折合人民币</th>
                <th className="h-12 px-4 align-middle font-medium text-right">操作</th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td className="p-4 align-middle font-medium flex items-center gap-2">
                  <span>🇹🇷</span> 土耳其 (TR)
                </td>
                <td className="p-4 align-middle">TRY 19.99</td>
                <td className="p-4 align-middle text-green-600 font-bold">¥ 4.85</td>
                <td className="p-4 align-middle text-right">
                  <button className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>
                    前往
                  </button>
                </td>
              </tr>
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td className="p-4 align-middle font-medium flex items-center gap-2">
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
                <td className="p-4 align-middle font-medium flex items-center gap-2">
                  <span>🇺🇸</span> 美国 (US)
                </td>
                <td className="p-4 align-middle">USD 2.99</td>
                <td className="p-4 align-middle text-red-500 font-bold">¥ 21.50</td>
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
