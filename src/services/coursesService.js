import http from "./httpService";
import config from "./config.json";

export const getCourses = () => {
    return http.get(`${config.toplearnapi}/courses`);
};

export const getCourse = courseId => {
    return http.get(`${config.toplearnapi}/course/${courseId}`);
};
export const newCourse = (course) => {
    return http.post(`${config.toplearnapi}/course`, course);
};

export const deleteCourse = (courseId) => {
    return http.delete(`${config.toplearnapi}/course/${courseId}`);
};

export const updateCourse = (courseId, course) => {
    return http.put(`${config.toplearnapi}/course/${courseId}`, course);
};













// import { getAxiosInstanceAPI } from "./api";

// export const getCourses = (callback) => {
//     getAxiosInstanceAPI().get("/courses")
//         .then(response => {
//             const data = response.data;
//             callback(true, data);
//         }).catch(error => {
//             callback(false, error.response.data.message);
//         })
// };