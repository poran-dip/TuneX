import { Check, Music, User, Users } from "lucide-react"

interface SearchPaneProps {
  searchQuery?: string
}

const SearchPane = ({ searchQuery }: SearchPaneProps) => {
  // Mock search data
  const searchData = {
    songs: [
      {
        title: "Alan Walker - Faded",
        artist: "Alan Walker",
        picture: "faded.png",
        href: "/songs/alan-walker-faded",
        streams: "2.1B"
      },
      {
        title: "Gryffin - Just For A Moment",
        artist: "Gryffin",
        picture: "just-for-a-moment.png",
        href: "/songs/gryffin-just-for-a-moment",
        streams: "45M"
      },
      {
        title: "Kygo - Firestone",
        artist: "Kygo",
        picture: "firestone.png",
        href: "/songs/kygo-firestone",
        streams: "892M"
      },
      {
        title: "K-391 & Alan Walker - Ignite",
        artist: "K-391, Alan Walker",
        picture: "ignite.png",
        href: "/songs/k391-alan-walker-ignite",
        streams: "156M"
      }
    ],
    artists: [
      {
        name: "Alan Walker",
        picture: "artist.png",
        href: "/artists/alan-walker",
        followers: "12.5M",
        verified: true
      },
      {
        name: "Gryffin",
        picture: "artist.png",
        href: "/artists/gryffin",
        followers: "2.8M",
        verified: true
      },
      {
        name: "Kygo",
        picture: "artist.png",
        href: "/artists/kygo",
        followers: "8.9M",
        verified: true
      },
      {
        name: "K-391",
        picture: "artist.png",
        href: "/artists/k391",
        followers: "1.2M",
        verified: false
      }
    ],
    users: [
      {
        username: "KiraXTanjiro",
        displayName: "Kira",
        picture: "artist.png",
        href: "/users/kirextanjiro",
        followers: "1.2K"
      },
      {
        username: "Juno",
        displayName: "Juno Music",
        picture: "artist.png",
        href: "/users/juno",
        followers: "892"
      },
      {
        username: "Ikara",
        displayName: "Ikara",
        picture: "artist.png",
        href: "/users/ikara",
        followers: "2.1K"
      }
    ]
  }

  // Filter results based on search query
  const filteredResults = searchQuery ? {
    songs: searchData.songs.filter(song => 
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    artists: searchData.artists.filter(artist => 
      artist.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    users: searchData.users.filter(user => 
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.displayName.toLowerCase().includes(searchQuery.toLowerCase())
    )
  } : searchData

  const hasResults = filteredResults.songs.length > 0 || filteredResults.artists.length > 0 || filteredResults.users.length > 0

  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 top-16 w-96 text-sm">
      <div className="flex flex-col max-h-96 bg-slate-800/95 backdrop-blur-sm border border-slate-600 rounded-md shadow-xl">
        <div className="flex flex-col p-4 gap-4 max-h-80 overflow-y-auto">
          {!searchQuery ? (
            // Recent searches or trending
            <div className="text-center py-8">
              <p className="text-slate-400">Start typing to search for songs, artists, or users</p>
            </div>
          ) : !hasResults ? (
            // No results
            <div className="text-center py-8">
              <p className="text-slate-300">No results found for "{searchQuery}"</p>
              <p className="text-slate-400 text-xs mt-2">Try searching for something else</p>
            </div>
          ) : (
            // Search results
            <>
              {/* Songs */}
              {filteredResults.songs.length > 0 && (
                <div>
                  <h3 className="text-slate-300 font-semibold mb-2 flex items-center">
                    <Music className="w-4 h-4 mr-2" />
                    Songs
                  </h3>
                  <div className="space-y-2">
                    {filteredResults.songs.slice(0, 3).map((song) => (
                      <a
                        key={song.href}
                        href={song.href}
                        className="flex items-center p-2 w-full rounded-lg bg-slate-700/50 hover:bg-slate-600/80 text-slate-200 hover:text-white transition-colors"
                      >
                        <img
                          src={song.picture}
                          alt={song.title}
                          className="w-10 h-10 mr-3 rounded-md object-cover flex-shrink-0"
                        />
                        <div className="flex flex-col gap-1 min-w-0 flex-1">
                          <p className="text-slate-200 font-medium truncate">{song.title}</p>
                          <p className="text-xs text-slate-400">{song.streams} streams</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Artists */}
              {filteredResults.artists.length > 0 && (
                <div>
                  <h3 className="text-slate-300 font-semibold mb-2 flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Artists
                  </h3>
                  <div className="space-y-2">
                    {filteredResults.artists.slice(0, 3).map((artist) => (
                      <a
                        key={artist.href}
                        href={artist.href}
                        className="flex items-center p-2 w-full rounded-lg bg-slate-700/50 hover:bg-slate-600/80 text-slate-200 hover:text-white transition-colors"
                      >
                        <img
                          src={artist.picture}
                          alt={artist.name}
                          className="w-10 h-10 mr-3 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex flex-col gap-1 min-w-0 flex-1">
                          <div className="flex items-center gap-1">
                            <p className="text-slate-200 font-medium truncate">{artist.name}</p>
                            {artist.verified && (
                              <div className="flex items-center justify-center w-3 h-3 bg-blue-500 rounded-full flex-shrink-0">
                                <Check className="w-2 h-2" strokeWidth={3} />
                              </div>
                            )}
                          </div>
                          <p className="text-xs text-slate-400">{artist.followers} followers</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Users */}
              {filteredResults.users.length > 0 && (
                <div>
                  <h3 className="text-slate-300 font-semibold mb-2 flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Users
                  </h3>
                  <div className="space-y-2">
                    {filteredResults.users.slice(0, 3).map((user) => (
                      <a
                        key={user.href}
                        href={user.href}
                        className="flex items-center p-2 w-full rounded-lg bg-slate-700/50 hover:bg-slate-600/80 text-slate-200 hover:text-white transition-colors"
                      >
                        <img
                          src={user.picture}
                          alt={user.username}
                          className="w-10 h-10 mr-3 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex flex-col gap-1 min-w-0 flex-1">
                          <p className="text-slate-200 font-medium truncate">@{user.username}</p>
                          <p className="text-xs text-slate-400">{user.followers} followers</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* View All Results */}
        {searchQuery && hasResults && (
          <a 
            href={`/search?q=${encodeURIComponent(searchQuery)}`}
            className="flex items-center justify-center w-full h-10 px-3 rounded-b-md bg-slate-600/40 hover:bg-slate-500/80 text-slate-400 hover:text-slate-200 transition-colors border-t border-slate-600/50"
          >
            <p>View all results for "{searchQuery}"</p>
          </a>
        )}
      </div>
    </div>
  )
}

export default SearchPane
