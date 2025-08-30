import { useState } from "react"
import { HelpCircle, LogOut, Moon, Settings, Sun, User2 } from "lucide-react"

const SettingsPane = () => {
  const [theme, setTheme] = useState<'Light' | 'Dark'>('Dark')
  
  const handleChangeTheme = () => {
    if (theme === "Light") setTheme("Dark")
    else setTheme("Light")
  }

  const handleLogout = () => {
    window.alert('Logged out!')
  }
  
  const topSettings = [
    {
      label: "Profile",
      href: "/profile",
      icon: User2
    },
    {
      label: "Settings",
      href: "/settings",
      icon: Settings
    },
    {
      label: "Help & Support",
      href: "/support",
      icon: HelpCircle
    },
  ]

  return (
    <div className="absolute right-6 top-16 w-64">
      <div className="flex flex-col bg-slate-800/95 backdrop-blur-sm border border-slate-600 rounded-md shadow-xl">
        {/* Top Settings */}
        <div className="flex flex-col p-3 gap-2">
            {topSettings.map(({ label, href, icon: Icon }) => (
            <a 
              key={href}
              className="flex items-center p-2 w-full bg-slate-700/60 hover:bg-slate-600/90 text-slate-200 hover:text-white rounded-lg transition-colors"
              href={href}
            >
              <Icon className="mr-2" />
              <p>{label}</p>
            </a>
          ))}
        </div>

        {/* Bottom Settings */}
        <div className="flex flex-col p-3 gap-2 border-t border-slate-600">
          <button 
            className="flex items-center p-2 w-full bg-slate-700/60 hover:bg-slate-600/90 text-slate-200 hover:text-white rounded-lg transition-colors cursor-pointer"
            onClick={handleChangeTheme}
          >
            {theme === "Dark" ? 
              <Moon className="mr-2" /> :
              <Sun className="mr-2" />
            }
            <p>Theme: {theme}</p>
          </button>
          <button 
            className="flex items-center p-2 w-full bg-slate-700/60 hover:bg-slate-600/90 text-slate-200 hover:text-white rounded-lg transition-colors cursor-pointer"
            onClick={handleLogout}
          >
            <LogOut className="mr-2" />
            <p>Log Out</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SettingsPane
