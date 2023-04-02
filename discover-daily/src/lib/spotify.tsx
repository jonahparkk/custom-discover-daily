import { access } from "fs";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = btoa(`${client_id}:${client_secret}`);

const getAccessToken = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token!
    })
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(`https://api.spotify.com/v1/me/player/currently-playing`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  return fetch("https://api.spotify.com/v1/me/top/tracks", {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};

export const getPlaylistList = async () => {
    const { access_token } = await getAccessToken();
  
    return fetch("https://api.spotify.com/v1/me/playlists?limit=50", {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });
};