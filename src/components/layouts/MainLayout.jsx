import React from 'react';
import Footer from '../comon/Footer';
import MainNav from '../Navs/MainNav';
import TopNav from '../Navs/TopNav';
import Header from './../comon/Header';

const MainLayout = ({ children }) => {
   return (
      <>
         <div className="landing-layer">
            <div className="container">
               <TopNav />
               <Header />
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