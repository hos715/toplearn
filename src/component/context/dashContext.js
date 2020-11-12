import { createContext } from "react";

export const DashContext = createContext({
    currentPage: 1,
    setCurrentPage: () => { },
    perPage: 7,
    handlePageChange: () => { },
    currentCourse: {},
    setSearch: () => { },
    openNewCourseDialog: () => { },
    openEditCourseDialog: () => { },
    openDeleteCourseDialog: () => { },
    courseData: [],
    filteredCourses: [],
    sortCoursesAsc: () => { },
    sortCoursesDesc: () => { },
    validator: null
})

