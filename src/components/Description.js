import React from 'react';

const descriptionStyle = {
    gridArea: "description"
}

const Description = () => {
  return (
    <div style={descriptionStyle}>
      <div>
          <p>Video Name</p>
          <p>Video descriptions</p>
      </div>
    </div>
  )
}

export default Description;