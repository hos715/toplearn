import React from 'react'
import Helmet from 'helmet'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AdminTopNav from './../admin/AdminTopNav';
import AdminSidebar from './../admin/AdminSidebar';

const PrivateLayout = ({ children }) => {
    const user = useSelector((state) => state.user);
    return (
        <div id="wrapper">
            <Helmet>
                <title>تاپلرن | داشبورد</title>
            </Helmet>
            <nav
                className="navbar navbar-inverse navbar-fixed-top"
                role="navigation"
            >
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/dashboard">
                        داشبورد تاپلرن
                    </Link>
                </div>

                <AdminTopNav user={user} />

                <AdminSidebar />
            </nav>
            <div id="page-wrapper">{children}</div>
        </div>
    );
}

export default PrivateLayout;