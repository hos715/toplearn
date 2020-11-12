import http from "./httpService";

import config from "./config.json";

export const registerUser = user => {
    return http.post(
        `${config.toplearnapi}/register`,
        JSON.stringify(user)
    );
};

export const loginUser = user => {
    return http.post(`${config.toplearnapi}/login`, JSON.stringify(user));
};




// import { getAxiosInstanceAPI } from "./api";

// export const registerUser = (user, callback) => {
//     getAxiosInstanceAPI().post("/register", user)
//         .then(response => {
//             const data = response.data;
//             callback(true, data);
//         }).catch(error => {
//             callback(false, error.response.data.message);
//         })
// }
// ;
// export const loginUser = (user, callback) => {
//     getAxiosInstanceAPI().post("/login", user)
//         .then(response => {
//             const data = response.data;
//             callback(true, data);
//         }).catch(error => {
//             callback(false, error.response.data.message);
//         })
// };