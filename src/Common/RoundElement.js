import React from 'react';

const RoundElement = ({ color, imgUrl, altText }) => {
  return (
    <div className={`circle-${color}`}>
        <img src={imgUrl} alt={altText} style={{border: `5px solid ${color}`}} />
    </div>
  )
}

export default RoundElement;