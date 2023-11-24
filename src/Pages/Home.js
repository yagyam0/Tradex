import React from 'react';
import RoundElement from '../Common/RoundElement';
import { devCategories } from '../Config/style-config';

const Home = () => {
  return (
    <>
      <div className='home-wrap'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 center">
              <div className="homepage-content">
                <span className='decorated-logo'> Tradex </span>
                <h1>Discover the World of Trade </h1>
                <h1> Build with TradeX </h1>
                <p>Empowering your business through international trade excellence.</p>
              </div>
            </div>
            <div className="col-lg-6 center">
              <img
                src="/Images/home-bg.png"
                alt="Tradex"
                className="img-fluid"
                width='70%'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='circular-wrap'>
        <p> Why choose Tradex </p>
        <div className='d-flex justify-content-evenly mt-4'>
          {devCategories.map((item, index) => {
            return <RoundElement key={index} color={item.color} imgUrl={item.imgUrl} altText={item.name} />
          })}
        </div>
      </div>
    </>
  )
};

export default Home;