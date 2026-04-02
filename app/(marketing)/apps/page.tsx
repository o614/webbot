/* eslint-disable tailwindcss/classnames-order */
import { Search } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "应用查价",
}

export default function AppsPage() {
  return (
    <div className="container mx-auto max-w-5xl py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      
      {/* 1. 顶部：极简搜索区 */}
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-slate-900 dark:text-white">
          应用查价
        </h1>
        <p className="max-w-2xl leading-normal text-slate-500 sm:text-xl sm:leading-8 dark:text-slate-400">
          输入 App 名称或 App Store 链接，一键洞悉全球 150+ 国家真实差价。
        </p>

        {/* 纯 Tailwind 打造的高级搜索框 */}
        <div className="relative mt-8 w-full max-w-2xl">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full rounded-full border border-slate-200 bg-white py-4 pl-12 pr-28 text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-slate-600 dark:focus:ring-slate-800 sm:text-lg transition-all"
            placeholder="如：Shadowrocket 或 粘贴链接"
          />
          <button className="absolute right-2 top-2 bottom-2 rounded-full bg-slate-900 px-6 font-medium text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 dark:focus:ring-white">
            查询
          </button>
        </div>

        {/* 热门标签 */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <span className="flex items-center text-sm text-slate-500 dark:text-slate-400">热门:</span>
          {["Shadowrocket", "Loon", "ChatGPT", "Minecraft"].map((tag) => (
            <span key={tag} className="inline-flex cursor-pointer items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <hr className="my-16 border-slate-200 dark:border-slate-800" />

      {/* 2. 搜索结果展示区 */}
      <div className="flex flex-col gap-6 sm:gap-8">
        
        {/* 应用卡片 */}
        <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:gap-6 sm:p-6 transition-all hover:shadow-md">
          {/* 纯样式伪造 App 图标外框 */}
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-100 shadow-inner dark:bg-slate-800 sm:h-20 sm:w-20 sm:rounded-3xl border border-slate-200/50 dark:border-slate-700/50">
             <span className="text-2xl text-slate-400">🚀</span>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">Shadowrocket</h2>
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
              <span className="max-w-[140px] truncate sm:max-w-none">Shadow Launch Technology Limited</span>
              <span className="hidden sm:inline">•</span>
              <span className="rounded bg-slate-100 px-1.5 py-0.5 dark:bg-slate-800">工具</span>
            </div>
            <div className="flex items-center gap-1 text-xs sm:text-sm">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-slate-500 font-medium">4.9 (1.2w)</span>
            </div>
          </div>
        </div>

        {/* 🚀 纯原生表格，不用任何组件，100% Tailwind */}
        <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
              <thead className="border-b border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
                <tr>
                  <th className="whitespace-nowrap px-6 py-4 font-semibold">国家/地区</th>
                  <th className="whitespace-nowrap px-6 py-4 font-semibold">当地价格</th>
                  <th className="whitespace-nowrap px-6 py-4 font-semibold">折合人民币</th>
                  <th className="whitespace-nowrap px-6 py-4 text-right font-semibold">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-900/50">
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="text-xl">🇹🇷</span> 土耳其 (TR)
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-mono text-slate-500">TRY 19.99</td>
                  <td className="whitespace-nowrap px-6 py-4 font-bold text-emerald-600 dark:text-emerald-500">¥ 4.85</td>
                  <td className="whitespace-nowrap px-6 py-4 text-right">
                    <button className="rounded-md px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">
                      直达商店
                    </button>
                  </td>
                </tr>
                <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-900/50">
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="text-xl">🇨🇳</span> 中国大陆 (CN)
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-mono text-slate-500">CNY 18.00</td>
                  <td className="whitespace-nowrap px-6 py-4 font-bold text-slate-900 dark:text-white">¥ 18.00</td>
                  <td className="whitespace-nowrap px-6 py-4 text-right">
                    <button className="rounded-md px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">
                      直达商店
                    </button>
                  </td>
                </tr>
                <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-900/50">
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="text-xl">🇺🇸</span> 美国 (US)
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-mono text-slate-500">USD 2.99</td>
                  <td className="whitespace-nowrap px-6 py-4 font-bold text-rose-500 dark:text-rose-400">¥ 21.50</td>
                  <td className="whitespace-nowrap px-6 py-4 text-right">
                    <button className="rounded-md px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">
                      直达商店
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
