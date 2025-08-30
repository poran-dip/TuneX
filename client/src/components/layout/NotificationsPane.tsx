import { Dot } from "lucide-react"

const NotificationsPane = () => {
  const notifications = [
    {
      message: "You got 862 new followers!",
      subtitle: "Dive into the stats now",
      picture: "artist.png",
      read: false,
      href: "dashboard/followers",
      when: "4s"
    },
    {
      message: "🎉 You just crossed 1000 followers!",
      subtitle: "Celebrate by sharing on your socials",
      picture: "TuneX.svg",
      read: false,
      href: "dashboard/followers",
      when: "22s"
    },
    {
      message: "New release from Gryffin",
      subtitle: "Gryffin - Just For A Moment",
      picture: "just-for-a-moment.png",
      read: false,
      href: "artists/gryffin/just-for-a-moment",
      when: "30m"
    },
    {
      message: "You got 16,231 new streams!",
      subtitle: "Alan Walker - Faded",
      picture: "faded.png",
      read: false,
      href: "dashboard/songs/faded",
      when: "36m"
    },
    {
      message: "KiraXTanjiro commented \"You deserve 1M streams, so good!\"",
      subtitle: "Alan Walker - Faded",
      picture: "faded.png",
      read: true,
      href: "dashboard/songs/faded/comments",
      when: "1h"
    },
    {
      message: "Juno commented \"Awesome song can you plz follow me baek\"",
      subtitle: "Alan Walker - Faded",
      picture: "faded.png",
      read: false,
      href: "dashboard/songs/faded/comments",
      when: "2h"
    },
    {
      message: "New release from Kygo",
      subtitle: "Kygo - Firestone",
      picture: "firestone.png",
      read: false,
      href: "artists/kygo/firestone",
      when: "14h"
    },
    {
      message: "Ikara commented \"Love it, the lyrics go hard in 0:28, really awesome stuff\"",
      subtitle: "K-391 & Alan Walker - Ignite",
      picture: "ignite.png",
      read: true,
      href: "dashboard/songs/ignite/comments",
      when: "1d"
    }
  ]

  return (
    <div className="absolute right-6 top-16 w-128 text-sm">
      <div className="flex flex-col max-h-104 bg-slate-800/95 backdrop-blur-sm border border-slate-600 rounded-md shadow-xl">
        <div className="flex flex-col p-3 gap-2 max-h-80 overflow-y-auto">
          {notifications.slice(0, 6).map(({ message, subtitle, picture, read, href, when }) => (
            <a 
              key={href + when}
              href={href}
              className={`flex items-center justify-between p-2 w-full rounded-lg transition-colors 
                ${read ? 
                  `bg-slate-700/50 hover:bg-slate-600/80 text-slate-300 hover:text-white` : 
                  `bg-slate-600/90 hover:bg-slate-500/95 text-white hover:text-white border border-slate-500/30`
                }`
              }
            >
              {/* Artwork & Content */}
              <div className="flex items-center">
                {/* Artwork */}
                <img
                  src={picture}
                  alt={`${subtitle}`}
                  className="w-10 h-10 mr-2 rounded-md object-cover flex-shrink-0"
                />

                {/* Notification Content */}
                <div className="flex flex-col gap-1 min-w-0 flex-1">
                  <p className={read ? "text-slate-300" : "text-white font-medium"}>{message}</p>
                  <p className={`text-xs ${read ? "text-slate-400" : "text-slate-200"}`}>{subtitle}</p>
                </div>
              </div>

              {/* Read status */}
              <div className="flex items-center flex-shrink-0 ml-4">
                <p className={`text-xs ${read ? "text-slate-500" : "text-slate-300"}`}>{when} ago</p>
                <div className="w-6 flex justify-center">
                  {!read && <Dot className="text-emerald-400" strokeWidth={4} />}
                </div>
              </div>
            </a>
          ))}
        </div> 

        {/* View All */}
        <a 
          href="/notifications"
          className="flex items-center justify-center w-full h-10 px-3 rounded-b-md bg-slate-600/40 hover:bg-slate-500/80 text-gray-400/60 hover:text-gray-100/90 transition-colors border-t border-slate-600/50"
        >
          <p>View All Notifications</p>
        </a>     
      </div>
    </div>
  )
}

export default NotificationsPane
