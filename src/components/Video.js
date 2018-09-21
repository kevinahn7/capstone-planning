import React from 'react';

const videoStyle = {
    gridArea: "video"
}

const playerStyle = {
    width: "80%"
}

const Video = () => {
  return (
    <div style={videoStyle}>
      <img src="https://i.ytimg.com/vi/0fjyCfjcLWc/maxresdefault.jpg" style={playerStyle}/>
    </div>
  )
}

export default Video;