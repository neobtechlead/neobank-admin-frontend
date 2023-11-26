import axios, {AxiosError, AxiosResponse} from "axios";

// Request Interceptor
axios.interceptors.request.use((request) => {
    request.headers.set("Authorization", `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`)
    return request;

})

// Response interceptor
axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
        // Log errors for 4XX and 5XX responses
        if (error.response && (error.response.status >= 400 && error.response.status < 600)) {
            console.error('Response interceptor error:', error); //To be removed when sentry integrated
        }
        return Promise.reject(error);
    }
);

export default {
    get: axios.get,
    post: axios.post,
    patch: axios.patch,
    put: axios.put,
    delete: axios.delete
}