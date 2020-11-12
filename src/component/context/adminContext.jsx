import React, { useEffect, useState, useRef } from 'react';

import { paginate } from './../../utils/paginate';
import { DashContext } from './dashContext';
import NewCourseDialog from './../admin/dialogs/NewCourseDialog';
import EditCourseDialog from './../admin/dialogs/EditCourseDialog';
import DeleteCourseDialog from './../admin/dialogs/DeleteCourseDialog';
import { orderBy } from 'lodash';
import SimpleReactValidator from 'simple-react-validator';

const AdminContext = ({ courses, children }) => {


    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(5);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    const [currentCourse, setCurrentCourse] = useState({});
    const [newCourseDialog, setNewCourseDialog] = useState(false);
    const [editCourseDialog, setEditCourseDialog] = useState(false);
    const [deleteCourseDialog, setDeleteCourseDialog] = useState(false);
    const [courseList, setCourseList] = useState([]);
    const [search, setSearch] = useState("");

    const openNewCourseDialog = () => setNewCourseDialog(true);
    const closeNewCourseDialog = () => setNewCourseDialog(false);

    const validator = useRef(
        new SimpleReactValidator({
            messages: {
                required: "پر کردن این فیلد الزامی است",
                min: "باید حداقل 5 کاراکتر باشد",
                email: "ایمیل وارد شده صحیح نمی باشد",
                integer: "مبلغ فقط باید به صورت عددی (به تومان) وارد شود. "
            }, element: message => <div className="validator-message">{message}</div>
        })
    );

    useEffect(() => setCourseList(courses), [courses]);

    const openEditCourseDialog = (course) => {
        setEditCourseDialog(true);
        setCurrentCourse(course)

    };
    const closeEditCourseDialog = () => setEditCourseDialog(false);

    const openDeleteCourseDialog = (course) => {
        setDeleteCourseDialog(true);
        setCurrentCourse(course)

    };
    const closeDeleteCourseDialog = () => setDeleteCourseDialog(false);

    const filteredCourses = courseList.filter((course) =>
        course.title.toLowerCase().includes(search.toLowerCase())
    );

    const sortCoursesByPriceASC = () => {
        setCourseList(orderBy(courseList, "price", "asc"));
    }
    const sortCoursesByPriceDESC = () => {
        setCourseList(orderBy(courseList, "price", "desc"));
    }
    const sortCoursesByTitleASC = () => {
        setCourseList(orderBy(courseList, "title", "asc"));
    }
    const sortCoursesByTitleDESC = () => {
        setCourseList(orderBy(courseList, "title", "desc"));
    }
    const courseData = paginate(filteredCourses, currentPage, perPage);

    return (
        <DashContext.Provider value={{
            currentPage,
            perPage,
            handlePageChange,
            courseData,
            openNewCourseDialog,
            openEditCourseDialog,
            openDeleteCourseDialog,
            setSearch,
            filteredCourses,
            sortCoursesByPriceASC,
            sortCoursesByPriceDESC,
            sortCoursesByTitleASC,
            sortCoursesByTitleDESC,
            validator
        }}>
            <NewCourseDialog showDialog={newCourseDialog} closeDialog={closeNewCourseDialog} />
            <EditCourseDialog showDialog={editCourseDialog} closeDialog={closeEditCourseDialog} course={currentCourse} />
            <DeleteCourseDialog showDialog={deleteCourseDialog} closeDialog={closeDeleteCourseDialog} course={currentCourse} />
            {children}
        </DashContext.Provider>
    );
}

export default AdminContext;