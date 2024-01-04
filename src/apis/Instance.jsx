import axios from "axios";

const Instance = () => {
    const baseURL = "http://localhost:5000";
    let auth = sessionStorage.getItem("logindata");
    let token = null;
    if ((auth)) {
        auth = JSON.parse(auth)
    }
    if (auth) token = auth?.token
    const headersAuth = { Authorization: `bearer ${token}` };
    axios.defaults.headers.common["Authorization"] = `bearer ${token}`;
    axios.defaults.baseURL = baseURL
    return axios.create();
};

export default Instance()