import type { BaseProps } from "@/types/base"

const Layout = ({ children }: BaseProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200 dark:bg-gray-900 text-gray-950 dark:text-white">
      {children}
    </div>
  )
}

export default Layout
