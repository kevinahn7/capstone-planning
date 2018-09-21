import React from 'react'
import Video from './Video';
import Description from './Description';
import Comments from './Comments';
import Recommendations from './Recommendations';

const mainBodyStyle = {
    display: "grid",
    // gridTemplateArea: "'video recommendations''description reccomendations''comments reccomendations'",
    gridTemplateColumns: "60% 40%"
}

const HomeBody = () => {
  return (
    <div style={mainBodyStyle}>
        <Video />
        <Description />
        <Comments />
        <Recommendations />
    </div>
  )
}

export default HomeBody;