import React from 'react'
const opts = {
  height: "250",
  width: "350",
  playerVars: {
    autoplay: 1,
  },
};

export default function Spotify() {
    return (
         <iframe src="https://open.spotify.com/embed/playlist/0Gug5ATgJnrG0C5q4Dh3Iq" frameBorder="0" title="Spotify" className="h-full w-full bg-ub-cool-grey"></iframe>
    )
}

export const displaySpotify = () => {
    <Spotify> </Spotify>
}
