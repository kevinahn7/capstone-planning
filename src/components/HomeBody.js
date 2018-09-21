import React from 'react'
import Video from './Video';
import Description from './Description';
import Comments from './Comments';
import Recommendations from './Recommendations';
import '../css/HomeBody.css';

const HomeBody = () => {
  return (
    <div className='mainBodyStyle'>
        <Video />
        <Description />
        <Comments />
        <Recommendations />
    </div>
  )
}

export default HomeBody;