import axios from 'axios';

const CSRF_COOKIE_NAME = "csrftoken";
const CSRF_HEADER_NAME = "X-CSRFToken";

export default axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 5000,
    responseType: "json",
    xsrfCookieName: CSRF_COOKIE_NAME,
    xsrfHeaderName: CSRF_HEADER_NAME,
});

axios.interceptors.response.use(response => response,
    error => {
        //const originalRequest = error.config;
        /*if (error.response.status === 401 && error.response.statusText === "Unauthorized"){
            const refresh_token = localStorage.getItem('refresh_token');

            return axiosInstance.post('/rest-auth/login/', {refresh: refresh_token})
            .then(response => {
                localStorage.setItem('access_key', response.data.key);
                localStorage.setItem('refresh_token', response.data.refresh);

                axiosInstance.defaults['Authorization'] = "JWT" + response.data.key;
                originalRequest.headers['Authorization'] = "JWT" + response.data.key;

                return axiosInstance(originalRequest);
            })
            .catch(err => console.error(err));
        }*/
        //return Promise.reject(error)
    }
);