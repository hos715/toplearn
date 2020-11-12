import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSingleCourse } from './../../actions/course';
import ShowImage from './../common/showImage';

const SingleCource = ({ match }) => {

    const course = useSelector(state => state.course);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSingleCourse(match.params.id));
        console.log(match);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="row">
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="a"> تاپ لرن </a></li>
                        <li className="breadcrumb-item active"><a href="a"> دوره ها </a></li>
                        <li className="breadcrumb-item active" aria-current="page">{course.title}</li>
                    </ul>
                </nav>
            </div>

            <div className="container">
                <section className="term-content">
                    <header><h1>{course.title}</h1></header>
                    <div className="row">

                        <div className="col-md-8 col-sm-12 col-xs-12 pull-left">
                            <section className="term-description">
                                <ShowImage image={course.imageUrl} />

                                <p>{course.info}</p>

                                <h2> سرفصل های این دوره : </h2>
                                <ul>
                                    <li> <h3> معرفی این دوره </h3> <i> رایگان </i> <span>00:15:12</span></li>
                                    <li> <h3> چرا شی گرایی یاد بگیریم ؟ </h3> <i> نقدی </i>  <span>01:15:12</span></li>
                                    <li> <h3> پروژه ایجاد یک وب سایت - طراحی دیتابیس </h3> <i> نقدی </i>  <span>02:05:12</span></li>
                                    <li> <h3> پروژه ایجاد یک وب سایت - ایجاد پنل مدیریت </h3> <i> نقدی </i>  <span>00:10:12</span></li>
                                    <li> <h3> چرا شی گرایی یاد بگیریم ؟ </h3> <i> نقدی </i>  <span>01:15:12</span></li>
                                    <li> <h3> پروژه ایجاد یک وب سایت - طراحی دیتابیس </h3> <i> نقدی </i>  <span>02:05:12</span></li>
                                    <li> <h3> پروژه ایجاد یک وب سایت - ایجاد پنل مدیریت </h3> <i> نقدی </i>  <span>00:10:12</span></li>
                                    <li> <h3> چرا شی گرایی یاد بگیریم ؟ </h3> <i> نقدی </i>  <span>01:15:12</span></li>
                                    <li> <h3> پروژه ایجاد یک وب سایت - طراحی دیتابیس </h3> <i> نقدی </i>  <span>02:05:12</span></li>
                                    <li> <h3> پروژه ایجاد یک وب سایت - ایجاد پنل مدیریت </h3> <i> نقدی </i>  <span>00:10:12</span></li>
                                </ul>
                            </section>

                            <section className="user-comments">
                                <header><h3> نظرات کاربران </h3></header>
                                <div className="inner">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-4 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="نام و نام خانوادگی" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="ایمیل" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="شماره تماس" />
                                                </div>
                                            </div>
                                            <div className="col-md-8 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <textarea className="form-control" placeholder="متن نظر"></textarea>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-7 col-xs-7">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="کد امنیتی" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-5 col-xs-5">
                                                        <img alt="alt" src="images/captcha.jpg" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12">
                                                <button type="submit" className="btn btn-success"> ثبت دیدگاه </button>
                                            </div>
                                        </div>
                                    </form>

                                    <div className="comment-list">

                                        <div className="comment-row">
                                            <img alt="alt" src="images/pic/avatar.jpg" />
                                            <div className="left-col">
                                                <h3> میترا رحیمی </h3>
                                                <span>12/03/1397</span>
                                                <p>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                            </p>
                                            </div>
                                        </div>


                                        <div className="comment-row">
                                            <img alt="alt" src="images/pic/avatar.jpg" />
                                            <div className="left-col">
                                                <h3> میترا رحیمی </h3>
                                                <span>12/03/1397</span>
                                                <p>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                            </p>
                                            </div>
                                        </div>


                                        <div className="comment-row">
                                            <img alt="alt" src="images/pic/avatar.jpg" />
                                            <div className="left-col">
                                                <h3> میترا رحیمی </h3>
                                                <span>12/03/1397</span>
                                                <p>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                            </p>
                                            </div>
                                        </div>


                                        <div className="comment-row">
                                            <img alt="alt" src="images/pic/avatar.jpg" />
                                            <div className="left-col">
                                                <h3> میترا رحیمی </h3>
                                                <span>12/03/1397</span>
                                                <p>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                            </p>
                                            </div>
                                        </div>


                                        <div className="comment-row">
                                            <img alt="alt" src="images/pic/avatar.jpg" />
                                            <div className="left-col">
                                                <h3> میترا رحیمی </h3>
                                                <span>12/03/1397</span>
                                                <p>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                            </p>
                                            </div>
                                        </div>


                                        <nav aria-label="Page navigation">
                                            <ul className="pagination justify-content-center">
                                                <li className="page-item">
                                                    <a className="page-link" href="a" aria-label="Previous">
                                                        <span aria-hidden="true"><i className="zmdi zmdi-chevron-right"></i></span>
                                                    </a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="a">1</a></li>
                                                <li className="page-item"><a className="page-link" href="a">2</a></li>
                                                <li className="page-item"><a className="page-link" href="a">3</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="a" aria-label="Next">
                                                        <span aria-hidden="true"><i className="zmdi zmdi-chevron-left"></i></span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>

                                    </div>
                                </div>
                            </section>
                        </div>

                        <aside className="col-md-4 col-sm-12 col-xs-12 pull-right">
                            <div className="statistics">
                                <ul>
                                    <li>
                                        <span> مدت دوره </span>
                                        <i> 03:12:52 </i>
                                    </li>
                                    <li>
                                        <span> تعداد ویدیوها </span>
                                        <i> 16 </i>
                                    </li>
                                    <li>
                                        <span> تعداد دانشجوها </span>
                                        <i> 52 نفر </i>
                                    </li>
                                </ul>

                                <a href="a"> شرکت در دوره : {course.price === 0 ? "رایگان" : course.price + " تومان"} </a>
                            </div>

                            <article className="teacher-info">
                                <img alt="alt" src="images/pic/avatar.jpg" />
                                <h2> مدرس : ایمان مدائنی </h2>
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است استفاده از طراحان گرافیک است ...
                            </p>
                            </article>

                            <article className="term-info">
                                <h2> اطلاعات این دوره </h2>
                                <ul>
                                    <li>سطح دوره: پیشرفته</li>
                                    <li>وضعیت دوره: در حال برگزاری</li>
                                    <li>قیمت : 450,000 تومان</li>
                                    <li>تاریخ ثبت این دوره : چهار شنبه ۲۱ شهریور ۱۳۹۷</li>
                                    <li>آخرین بروزرسانی دوره : چهار شنبه ۲۱ شهریور ۱۳۹۷</li>
                                </ul>
                            </article>

                            <div className="share-layer">
                                <span> به اشتراک گذاری </span>
                                <a href="a"><i className="zmdi zmdi-facebook"></i></a>
                                <a href="a"><i className="zmdi zmdi-google-old"></i></a>
                                <a href="a"><i className="zmdi zmdi-twitter"></i></a>
                                <a href="a"><i className="zmdi zmdi-linkedin"></i></a>
                            </div>

                            <div className="tags-layer">
                                <a href="a"> ربات تلگرام </a>
                                <a href="a"> ساخت ربات </a>
                                <a href="a"> برنامه نویسی ربات </a>
                                <a href="a"> کدنویسی ربات </a>
                                <a href="a"> ربات تلگرام </a>
                                <a href="a"> ساخت ربات </a>
                                <a href="a"> برنامه نویسی ربات </a>
                                <a href="a"> کدنویسی ربات </a>
                            </div>

                        </aside>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default SingleCource;