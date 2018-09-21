import React from 'react';

const recommendationsStyle = {
    gridArea: "recommendations"
}

const recStyle = {
    width: "100%"
}

const Recommendations = () => {
  return (
    <div style={recommendationsStyle}>
      <img src={require('../assets/recs.PNG')} style={recStyle} />
    </div>
  )
}

export default Recommendations;