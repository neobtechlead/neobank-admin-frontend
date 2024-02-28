import axios, {AxiosError, AxiosResponse} from "axios";
import useAuthStore from "@/stores/auth";

const instance = axios.create();


instance.interceptors.request.use(
    (config) => {
        const token = useAuthStore.getState().user?.token;

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);
instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
        // Log errors for 4XX and 5XX responses
        if (error.response && (error.response.status >= 400 && error.response.status < 600)) {
            console.error('Response interceptor error:', error); //To be removed when sentry integrated
        }

        // Handle 401 errors
        if (error.response && error.response.status === 401) {
            const originalUrl = error.config?.url;
            if (!isPublicEndpoint(originalUrl)) window.location.href = "/"
        }
        return Promise.reject(error);
    }
);


const isPublicEndpoint = (url?: string): boolean => {
    if (!url) return false;
    const pathname = new URL(url).pathname.replace("/api/v1", "");
    return ["/auth/login", "/auth/request-reset-password", "/auth/reset-password"].includes(pathname);
};

export default {
    get: instance.get,
    post: instance.post,
    patch: instance.patch,
    put: instance.put,
    delete: instance.delete
};
