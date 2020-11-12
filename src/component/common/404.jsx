import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="col-12 text-center">
            <h1 className="text-danger " style={{fontSize: "18rem", margin: "30px auto 60px auto"}}>404</h1>
            <h1 className="text-warning bg-light text-center" style={{ margin: "5px auto 20px auto" }}>داری اشتباه میزنی</h1>
            <Link to="/">برو به صفحه اصلی</Link>
        </div>
    );
}

export default NotFound;