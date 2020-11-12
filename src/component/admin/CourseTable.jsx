import React, { useContext } from 'react';
import Pagination from './../common/Pagination';
import { DashContext } from './../context/dashContext';

const CourseTable = () => {

    const adminContext = useContext(DashContext);

    const {
        courseData,
        perPage,
        currentPage,
        handlePageChange,
        openNewCourseDialog,
        openEditCourseDialog,
        openDeleteCourseDialog,
        setSearch,
        filteredCourses,
        sortCoursesByPriceASC,
        sortCoursesByPriceDESC,
        sortCoursesByTitleASC,
        sortCoursesByTitleDESC
    } = adminContext;

    return (
        <section style={{ margin: "2em 2em 0" }}>
            <div>
                <div>
                    <h3 className="alert alert-info text-center">
                        لیست دوره ها
                    </h3>
                    <div className="row inline-block">
                        <button className="btn btn-primary" onClick={openNewCourseDialog}>
                            <span className="fa fa-plus" style={{ marginLeft: "1em" }} />
                            افزودن دوره جدید
                        </button>
                        <input type="text"
                            placeholder="جستجوی دوره"
                            onChange={e => setSearch(e.target.value)}
                            className="col-6"
                            style={{ float: "left", marginLeft: "2em" }} />
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">عنوان دوره
                                <span
                                        className="fa fa-long-arrow-up"
                                        style={{ marginRight: "0.5em" }}
                                        onClick={sortCoursesByTitleASC}
                                    ></span>
                                    <span
                                        className="fa fa-long-arrow-down"
                                        style={{ marginRight: "0.5em" }}
                                        onClick={sortCoursesByTitleDESC}
                                    ></span>
                                </th>
                                <th scope="col">تصویر دوره</th>
                                <th scope="col">قیمت دوره (تومان)
                                <span
                                        className="fa fa-long-arrow-up"
                                        style={{ marginRight: "0.5em" }}
                                        onClick={sortCoursesByPriceASC}
                                    ></span>
                                    <span
                                        className="fa fa-long-arrow-down"
                                        style={{ marginRight: "0.5em" }}
                                        onClick={sortCoursesByPriceDESC}
                                    ></span>
                                </th>
                                <th scope="col">ویرایش</th>
                                <th scope="col">حذف</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courseData.map(crs =>
                                (
                                    <tr key={crs._id}>
                                        <td>{crs.title}</td>
                                        <td>
                                            <a href={`https://toplearnapi.ghorbany.dev/${crs.imageUrl}`}
                                                target="_blank"
                                                className="btn btn-info btn-sm">
                                                نمایش تصویر
                                        </a>
                                        </td>
                                        <td>
                                            {crs.price === 0 ? "رایگان" : `${crs.price}`}
                                        </td>
                                        <td>
                                            {
                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => openEditCourseDialog(crs)}>
                                                    ویرایش
                                                </button>
                                            }
                                        </td>
                                        <td>
                                            {
                                                <button className="btn btn-danger"
                                                    onClick={() => openDeleteCourseDialog(crs)}>
                                                    حذف
                                            </button>
                                            }
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="navbar-fixed-bottom text-center footer">
                    <Pagination
                        totalCourse={filteredCourses.length}
                        currentPage={currentPage}
                        perPage={perPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </section>
    );
}

export default CourseTable;