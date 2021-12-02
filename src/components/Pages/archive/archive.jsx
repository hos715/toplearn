import React from 'react';
import Categories from './Categories';
import FilterByCategory from './FilterByCategory';
import FilterByPrice from './FilterByPrice';

const Archive = () => {
   return (
      <>
         <div className="row">
            <div className="container">
               <nav aria-label="breadcrumb">
                  <ul class="breadcrumb">
                     <li class="breadcrumb-item"><a href="#">تاپ لرن</a></li>
                     <li class="breadcrumb-item active"><a href="#">دوره ها</a></li>
                     <li class="breadcrumb-item active" aria-current="page"> برنامه نویسی وب </li>
                  </ul>
               </nav>
            </div>
         </div>
         <section className="term-categories">

            <Categories />

            <div className="row">

               <aside className="col-lg-3 col-md-4 col-sm-12 col-xs-12">

                  <FilterByPrice />

                  <FilterByCategory />

               </aside>

               <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">

                  <section className="terms-items">
                     <div className="row">

                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                           <article>
                              <a href="" className="img-layer"><img src="assets/images/pic/1.jpg" /></a>
                              <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                              <span> رایگان </span>
                              <i>1:52:32</i>
                           </article>
                        </div>


                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                           <article>
                              <a href="" className="img-layer"><img src="assets/images/pic/2.jpg" /></a>
                              <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                              <span> رایگان </span>
                              <i>1:52:32</i>
                           </article>
                        </div>


                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                           <article>
                              <a href="" className="img-layer"><img src="assets/images/pic/3.jpg" /></a>
                              <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                              <span> 150.000 تومان </span>
                              <i>1:52:32</i>
                           </article>
                        </div>


                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                           <article>
                              <a href="" className="img-layer"><img src="assets/images/pic/4.jpg" /></a>
                              <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                              <span> رایگان </span>
                              <i>1:52:32</i>
                           </article>
                        </div>


                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                           <article>
                              <a href="" className="img-layer"><img src="assets/images/pic/5.jpg" /></a>
                              <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                              <span> 15.000 تومان </span>
                              <i>1:52:32</i>
                           </article>
                        </div>


                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                           <article>
                              <a href="" className="img-layer"><img src="assets/images/pic/6.jpg" /></a>
                              <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                              <span> رایگان </span>
                              <i>1:52:32</i>
                           </article>
                        </div>


                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                           <article>
                              <a href="" className="img-layer"><img src="assets/images/pic/7.jpg" /></a>
                              <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                              <span> 20.000 تومان </span>
                              <i>1:52:32</i>
                           </article>
                        </div>


                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                           <article>
                              <a href="" className="img-layer"><img src="assets/images/pic/8.jpg" /></a>
                              <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                              <span> 75.000 تومان </span>
                              <i>1:52:32</i>
                           </article>
                        </div>


                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                           <article>
                              <a href="" className="img-layer"><img src="assets/images/pic/4.jpg" /></a>
                              <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                              <span> 75.000 تومان </span>
                              <i>1:52:32</i>
                           </article>
                        </div>

                     </div>


                     <nav aria-label="Page navigation">
                        <ul className="pagination justify-content-center">
                           <li className="page-item">
                              <a className="page-link" href="#" aria-label="Previous">
                                 <span aria-hidden="true"><i className="zmdi zmdi-chevron-right"></i></span>
                              </a>
                           </li>
                           <li className="page-item"><a className="page-link" href="#">1</a></li>
                           <li className="page-item"><a className="page-link" href="#">2</a></li>
                           <li className="page-item"><a className="page-link" href="#">3</a></li>
                           <li className="page-item">
                              <a className="page-link" href="#" aria-label="Next">
                                 <span aria-hidden="true"><i className="zmdi zmdi-chevron-left"></i></span>
                              </a>
                           </li>
                        </ul>
                     </nav>

                  </section>

               </div>
            </div>
         </section>
      </>
   );
}

export default Archive;