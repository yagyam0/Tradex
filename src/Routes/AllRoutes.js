import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const Home = lazy(() => import('../Pages/Home'));
const About = lazy(() => import('../Pages/About'));
const Contact = lazy(() => import('../Pages/Contact'));
// const PageNotFound = lazy(() => import('../Pages/PageNotFound'));

const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* <PrivateRoute
            path="/private"
            element={<PrivatePage />}
            isAuthenticated={isAuthenticated}
          /> */}
      </Routes>
    </div>
  )
}

export default AllRoutes;