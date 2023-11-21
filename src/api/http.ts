import axios from "axios";

axios.defaults.withCredentials = true
axios.defaults.baseURL = "http://localhost:8080"
axios.interceptors.request.use((request) => {
    request.headers.set("token", "TEST")
    return request;

})

export default {
    get: axios.get,
    post: axios.post,
    patch: axios.patch,
    put: axios.put,
    delete: axios.delete
}