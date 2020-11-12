import React from 'react'
import { withRouter } from 'react-router-dom';

import TopNav from '../common/TopNav';
import Header from './../common/Header';
import MainNav from './../common/MainNav';
import Footer from './../common/Footer';

import LoadingBar from 'react-redux-loading-bar';

const MainLayout = (props) => {
    const { pathname } = props.location;
    return (
        <>
            <div className="landing-layer">
                <LoadingBar style={{ height: "25px", backgroundColor: "lime" }} />
                <div className="container">
                    <TopNav />
                    {pathname === "/" ? <Header /> : null}
                </div>
            </div>
            <div className="main-menu">
                <div className="container">
                    <MainNav />
                </div>
            </div>
            <main id="home-page">
                <div className="container">
                    {props.children}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default withRouter(MainLayout);