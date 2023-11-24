import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='container grid grid-four-column d-flex justify-content-evenly gap-50'>
            <div className='logo-desc-wrap  w-25'>
                <p className='logo'> Trade<span className='x-letter'>X</span> </p>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
            </div>
            <div className='links'>
                <p className='link-head'> Links </p>
                <ul className='link-list'>
                  <li> <a href='#'> Home </a> </li>
                  <li> <a href='#'> About </a> </li>
                  <li> <a href='#'> Contact </a> </li>
                  <li> <a href='#'> Help </a> </li>
                </ul>
            </div>
            <div className='services'>
              <p className='link-head'> Services </p>
              <ul className='link-list'> 
                <li> <a href='#'> Web Designs </a> </li>
                <li> <a href='#'> Web Development </a> </li>
                <li> <a href='#'> Android Development </a> </li>
                <li> <a href='#'> Game Development </a> </li>
              </ul>
            </div>
            <div className='help-section'>
              <p className='link-head'> Have a Question? </p>
              <address className='link-list'>
                <div>
                  <span> Indore, India </span>
                </div>
                <div>
                  <a href='#'> +91 8358442945 </a>
                </div>
                <div>
                  <span> customersupporttradex@xmail.com </span>
                </div>
              </address>
            </div>
        </div>
    </footer>
  )
};

export default Footer;