import {useMutation} from "@tanstack/react-query";
import http from "@/api/http";
import {ApiResponse} from "@/utils/types/dto";
import {LoginResponse} from "@/utils/types/auth";

const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`;

const useLogout = () => {

    return useMutation({
        mutationFn: () =>
            postLogout(),
    });
};

const postLogout = async () => {
    await http.get<ApiResponse<LoginResponse>>(`${BASE_URL}/auth/logout`);
};

export default useLogout;
