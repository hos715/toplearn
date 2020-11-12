import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.headers.post["Content-Type"] = "application/json";

const token = localStorage.getItem("token");

if (token)
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

axios.interceptors.response.use(null, error => {
    const expectedErrors =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedErrors) {
        console.log(error);
        toast.error("مشکلی از سمت سرور رخ داده است.", {
            position: "top-right",
            closeOnClick: true
        });
    }

    return Promise.reject(error);
});

const http = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}
export default http;
// export default {
//     get: axios.get,
//     post: axios.post,
//     put: axios.put,
//     delete: axios.delete
// };

















// import axios from 'axios';
// import { toast } from 'react-toastify'

// axios.defaults.headers.post["Content-Type"] = "application/json";

// export default axios.interceptors.response.use(null, error => {
//     const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
//     if (!expectedError) {
//         toast.error(`مشکلی از سمت سرور رخ داده ${<span className="zmdi zmdi-bug"/>}`);
//         console.log(error);
//     }
//     return Promise.reject(error);
// })
