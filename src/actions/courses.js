import { deleteCourse, getCourses, newCourse, updateCourse } from './../services/coursesService';
import { toast } from 'react-toastify';


export const getAllCourses = () => {
    return async (dispatch) => {
        const { data } = await getCourses();
        await dispatch({ type: "INIT", payload: data.courses });
    };
};
export const createNewCourse = (course) => {
    return async (dispatch, getState) => {
        const { data, status } = await newCourse(course);
        if (status === 201) toast.success("دوره جدید با موفقیت ارسال شد");
        await dispatch({
            type: "ADD_COURSE",
            payload: [...getState().courses, data.course],
        });
    };
};

export const handleCourseUpdate = (courseId, updatedCourse) => {
    return async (dispatch, getState) => {

        const courses = [...getState().courses];
        const updatedCourses = [...courses];

        const courseIndex = updatedCourses.findIndex((c) => c._id === courseId);

        let course = updatedCourses[courseIndex];

        course = { ...Object.fromEntries(updatedCourse) };
        updatedCourses[courseIndex] = course;


        console.log(course);
        console.log(updatedCourses[courseIndex]);

        try {
            const { data, status } = await updateCourse(courseId, updatedCourse);
            if (status === 200) {
                toast.success("با موفقیت ویرایش شد");
                await dispatch({
                    type: "UPDATE_COURSE",
                    payload: [...updatedCourses]
                });
            }
        } catch (ex) {
            console.log(ex);

            await dispatch({
                type: "UPDATE_COURSE",
                payload: [...courses]
            });
        }
    }
};

export const handleCourseDelete = (courseId) => {
    return async (dispatch, getState) => {
        const courses = [...getState().courses];
        const filteredPerson = courses.filter(course => course._id !== courseId);

        try {
            await dispatch({ type: "DELETE_COURSE", payload: [...filteredPerson] });
            const { status } = await deleteCourse(courseId);
            
            if (status === 200) {
                toast.success('با موفقیت حذف شد');
            } else {
                toast.error('کورس مورد نظر یافت ');
            }
        } catch (ex) {
            console.log(ex);
            await dispatch({ type: "DELETE_COURSE", payload: [...courses] });
        }
    }
}