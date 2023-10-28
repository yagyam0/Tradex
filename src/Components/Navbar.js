import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import Form from './Form';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="navbar">
        <div className="container d-flex">
          <NavLink to='/' className='header-text'> 
              {/* <img className='' src='' alt='logo' /> */}
              <p> Trade<span className='x-letter'>X</span> </p>
          </NavLink>
          <div className='page-container'>
            <NavLink to='/' className='nav-txt'> Home </NavLink>
            <NavLink to='/about' className='nav-txt'> About </NavLink>
            <NavLink to='/contact' className='nav-txt'> Contact </NavLink>
          </div>
          <div className='user-btn-wrap'>
            <Button type='login' label='Login' />
            <Button type='signup' handleClick={() => setIsOpen(true)} label='Sign Up Free' />
          </div>
        </div>
      </nav>
      {isOpen && <Form open={isOpen} close={handleClose} />}
    </>
  );
};

export default Navbar;