import React, { useEffect, useState } from 'react'

export default function Playlists(){

    const [playlistList, setPlaylistList] = useState<any[]>([]);

    const fetchPlaylistList = async () => {
        const response = await fetch("/api/stats/playlist-list");
        const data = await response.json();
        // const tracksArray = JSON.parse(data.tracks);
        setPlaylistList(data);
        console.log(data);
    };
    useEffect(() => {
        fetchPlaylistList();
    
        return () => {
          <div></div>
        }
      }, [])

    return (
        <div>
            <h1>Playlists Page</h1>
            <ul>
            {playlistList.playlists?.map((playlists:any) => {
              return (
                <li>
                  {playlists.name}
                </li>
              );
            })}
          </ul>
        </div>

    )
}