import React from 'react'

const MainNav = (props) => {
    return ( 
        <nav>
                        <span className="responsive-sign"><i className="zmdi zmdi-menu"></i></span>
                        <ul>
                            <li><a href="a"> برنامه نویسی موبایل </a>
                                <ul>
                                    <li><a href="a"> زامارین  Xamarin </a></li>
                                    <li><a href="a"> react Native </a></li>
                                </ul>
                            </li>
                            <li><a href="a"> برنامه نویسی وب </a>
                                <ul>
                                    <li><a href="a"> Asp.net WebForms </a></li>
                                    <li><a href="a"> Asp.net MVC </a></li>
                                    <li><a href="a"> PHP MVC </a></li>
                                    <li><a href="a"> PHP FrameWorks </a></li>
                                    <li><a href="a"> Asp.net Core </a></li>
                                </ul>
                            </li>
                            <li><a href="a"> برنامه نویسی تحت ویندوز </a></li>
                            <li><a href="a"> طراحی سایت </a>
                                <ul>
                                    <li><a href="a"> طراحی سایت </a></li>
                                    <li><a href="a"> Bootstrap </a></li>
                                    <li><a href="a"> Angular </a></li>
                                    <li><a href="a"> react </a></li>
                                    <li><a href="a"> Jquery </a></li>
                                </ul>
                            </li>
                            <li><a href="a"> بانک های اطلاعاتی </a></li>
                            <li><a href="a"> سئو </a></li>
                            <li><a href="a"> سیستم عامل </a></li>
                        </ul>
                    </nav>
     );
}
 
export default MainNav;