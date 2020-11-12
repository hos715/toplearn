import Axios from 'axios'

export const getAxiosInstanceJsonserver = () => {
    return Axios.create({
        baseURL: "http://localhost:3000/",
        headers: {
            all: {
                API_KEY: "ashdjkashdkjasjdnmّnajncjkasckja"
            }
        }
    });
};
export const getAxiosInstanceAPI = () => {
    return Axios.create({
        baseURL: "https://toplearnapi.ghorbany.dev/api",
        headers: {
            "Content-Type": "application/json"
        }
    });
};