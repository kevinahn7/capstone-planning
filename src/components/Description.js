import React from 'react';

const descriptionStyle = {
  gridArea: "description",
  borderBottom: "1px solid lightgray"
}

const videoInfoStyle = {
  borderBottom: "1px solid lightgray"
}

const moreVideoInfoStyle = {
  display: "flex",
  justifyContent: "space-between"
}

const moreInfoLeft = {
  display: "inline"
}

const moreInfoRight = {
  display: "inline",
  margin: " 0 5px"
}

const imageStyle = {
  width: "50px",
  float: "left",
  borderRadius: "50%"
}


const Description = () => {
  return (
    <div style={descriptionStyle}>
      
      <div style={videoInfoStyle}>
        <p>Who would win, 20 rabbits or a baby giraffe?</p>
        <div style={moreVideoInfoStyle}>
          <p style={moreInfoLeft}>1,151,512 views</p>
          <span>
            <p style={moreInfoRight}>More</p>
            <p style={moreInfoRight}>Share</p>
            <p style={moreInfoRight}>Dislike</p>
            <p style={moreInfoRight}>Like</p>
          </span>

        </div>
      </div>
      <div>
      <img src="https://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440-s800-c85.jpg" style={imageStyle}/>
        <p>The Video Author</p>
        <p>Published March 1st, 2017</p>
      </div>
    </div>
  )
}

export default Description;