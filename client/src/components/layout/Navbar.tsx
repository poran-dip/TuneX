import { Bell, Search, User } from "lucide-react"
import { useState, type ChangeEvent } from "react"
import SettingsPane from "./SettingsPane"
import NotificationsPane from "./NotificationsPane"
import SearchPane from "./SearchPane"

const Navbar = () => {
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [searchQuery, setSearchQuery] = useState<string>('')

  const handleSettingsOpen = () => {
    if (settingsOpen) {
      setSettingsOpen(false)
    } else {
      setIsSearching(false)
      setNotificationsOpen(false)
      setSettingsOpen(true)
    }
  }

  const handleNotificationsOpen = () => {
    if (notificationsOpen) {
      setNotificationsOpen(false)
    } else {
      setIsSearching(false)
      setSettingsOpen(false)
      setNotificationsOpen(true)
    }
  }

  const handleSearch = () => {
    setSettingsOpen(false)
    setNotificationsOpen(false)
    setIsSearching(true)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <nav className="absolute inset-0 z-10 h-16">
      <div className="h-full flex items-center justify-center bg-slate-800/90 hover:bg-slate-700/95 text-slate-200 hover:text-white backdrop-blur-sm transition-colors">
        {/* Desktop */}
        <div className="w-full hidden sm:flex justify-between items-center px-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="TuneX.svg"
              alt="TuneX Logo"
              className="w-9 h-9"
            />
          </div>

          <div className="flex items-center space-x-12">
            {/* Links */}
            <div className="flex space-x-8 items-center">
              <a 
                href="/"
                className="relative font-semibold text-slate-200 hover:text-white transition-colors after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-sky-400 after:rounded-full"
              >
                Home
              </a>
              <a 
                href="/feed"
                className="font-semibold text-slate-400 hover:text-slate-200 transition-colors"
              >
                Feed
              </a>
              <a 
                href="/explore"
                className="font-semibold text-slate-400 hover:text-slate-200 transition-colors"
              >
                Explore
              </a>
            </div>

            {/* Search */}
            <div className="relative inline-block">
              <input 
                onFocus={handleSearch}
                onBlur={() => setIsSearching(false)}
                value={searchQuery}
                onChange={handleChange}
                placeholder="Search your favorite songs & artists"
                className={`border border-slate-600 bg-slate-700/50 text-slate-200 placeholder-slate-400 h-10 w-80 pl-10 pr-4 rounded-full focus:outline-none focus:border-slate-400 focus:bg-slate-600/50 transition-all ${
                  isSearching ? 'border-slate-400 bg-slate-600/50' : ''
                }`}
              />
              <Search className="absolute top-3 left-3 w-4 h-4 text-slate-400" />
            </div>
          </div>

          {/* Options */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <button 
              className={`border-2 rounded-4xl p-2.5 cursor-pointer transition-colors ${
                notificationsOpen 
                  ? 'border-slate-400 bg-slate-700/50' 
                  : 'border-slate-600 hover:border-slate-400'
              }`}
              onClick={handleNotificationsOpen}
            >
              <Bell />
            </button>

            <button 
              className={`border-2 rounded-4xl p-2.5 cursor-pointer transition-colors ${
                settingsOpen 
                  ? 'border-slate-400 bg-slate-700/50' 
                  : 'border-slate-600 hover:border-slate-400'
              }`}
              onClick={handleSettingsOpen}
            >
              <User />
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex sm:hidden justify-between">
          On Mobile
        </div>
      </div>

      {settingsOpen &&
        <SettingsPane />
      }

      {notificationsOpen &&
        <NotificationsPane />
      }

      {isSearching &&
        <SearchPane searchQuery={searchQuery} />
      }
    </nav>
  )
}

export default Navbar
