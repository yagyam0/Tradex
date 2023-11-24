import React from 'react';

const RoundElement = ({ color, imgUrl, altText, }) => {
  return (
    <div className='dev-category-wrap'>
        <img src={imgUrl} className='circle-img' alt={altText} style={{border: `2px solid ${color}`}} />
        <p> {altText} </p>
        <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, sit amet consectetur adipisicing elit. Neque, odio!</span>
    </div>
  )
};

export default RoundElement;