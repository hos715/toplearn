import React from 'react';
import TopNav from './components/Navs/TopNav';
import Header from './components/comon/Header';
import MainNav from './components/Navs/MainNav';
import Course from './components/course/course';
import Footer from './components/comon/Footer';

const App = () => {
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
               <Course />
            </div>
         </main>

         <Footer />

      </>
   );
}

export default App;