import axios from 'axios';

const CSRF_COOKIE_NAME = "csrftoken";
const CSRF_HEADER_NAME = "X-CSRFToken";

const base = axios
    .create({
      baseURL: 'http://127.0.0.1:8000',
      timeout: 5000,
      responseType: "json",
      xsrfCookieName: CSRF_COOKIE_NAME,
      xsrfHeaderName: CSRF_HEADER_NAME,
      headers: {
        "Content-type": "application/json"
      }
    });

export default base;

export const authLogin = (username, password) => {
    base
      .post("/rest-auth/login/", {
        username: username,
        password: password
      })
      .then(res => {
        const token = res.data.key;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        return res;
      })
      .catch(err => console.error(err));
};

export const authSignup = (username, email, password1, password2) => {
    base
      .post("/rest-auth/registration/", {
        username: username,
        email: email,
        password1: password1,
        password2: password2
      })
      .then(res => {
        const token = res.data.key;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        return res;
      })
      .catch(err => console.error(err));
};

export const checkAuthTimeout = expirationTime => {
  setTimeout(() => {
    return false
  }, expirationTime * 1000);
};

export const authCheckState = () => {
    const token = localStorage.getItem("token");
    console.log(token)
    if (token === undefined) {
      return false;
    } else {
      let expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        return false;
      } else {
          expirationDate = checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          );
          localStorage.setItem("expirationDate", expirationDate);
          return token;
      }
    }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
};

export const authReset = (email) => {
    base
      .post('/rest-auth/password/reset/', {
        email: email,
      })
      .then(res => {
        console.lot(res.data);
        return res;
      })
      .catch(err => console.error(err));
};

export const authResetConfirm = (token, uid, password1, password2) => {
    base
      .post('/rest-auth/password/reset/confirm/', {
        token: token,
        uid: uid,
        new_password1: password1,
        new_password2: password2
      })
      .then(res => {
        console.lot(res.data);
        return res;
      })
      .catch(err => console.error(err));
};

/*axios.interceptors.response.use(response => response,
    error => {
        const originalRequest = error.config;
        if (error.response.status === 401 && error.response.statusText === "Unauthorized"){
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
        }
        //return Promise.reject(error)
    }
);*/