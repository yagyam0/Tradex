import React from 'react';

const Input = ({ name, type, placeholder, value, handleChange, handleBlur }) => {
  return (
        <input 
            type={type}
            autoComplete='off'
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
        />
  )
}

export default Input;