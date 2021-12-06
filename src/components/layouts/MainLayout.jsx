import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import TopNav from '../Navs/TopNav';
import Header from './../comon/Header';
import MainNav from '../Navs/MainNav';
import Footer from '../comon/Footer';

const MainLayout = ({ children, path }) => {
   console.log(path);
   return (
      <>
         <Helmet>
            <title>خودآموز تاپلرن</title>
         </Helmet>
         <div className="landing-layer">
            <div className="container">
               <TopNav />

               {/* {pathName === "/" ?  : null} */}
               <Routes>
                  <Route
                     path="/"
                     element={
                        <Header />
                     }
                  />
               </Routes>
            </div>
         </div>

         <MainNav />

         <main id="home-page">
            <div className="container">
               {children}
            </div>
         </main>

         <Footer />
      </>
   );
}

export default MainLayout;