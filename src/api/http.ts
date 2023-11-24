import axios from "axios";

axios.interceptors.request.use((request) => {
    request.headers.set("Authorization", `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`)
    return request;

})

export default {
    get: axios.get,
    post: axios.post,
    patch: axios.patch,
    put: axios.put,
    delete: axios.delete
}