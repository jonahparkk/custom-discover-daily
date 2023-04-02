import { getPlaylistList } from '../../../lib/spotify';
 
export default async (_: any, res: any) => {
  const response = await getPlaylistList();
  const { items } = await response.json();
 
  const playlists = items?.map((playlist: any) => ({
    // artist: track.artists.map((_artist: any) => _artist.name).join(', '),
    description: playlist.description,
    name: playlist.name,
    id: playlist.id
  }));
 
  return res.status(200).json({ playlists });
};