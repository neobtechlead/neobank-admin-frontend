import {useMutation} from "@tanstack/react-query";
import http from "@/api/http";
import {ApiResponse} from "@/utils/types/dto";
import {LoginFormValues} from "@/utils/validations/schema/login";
import {LoginResponse} from "@/utils/types/auth";

const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`;

const useLoginMutation = () => {

    return useMutation({
        mutationFn: ({data}: { data: LoginFormValues }) =>
            postLogin(data),
    });
};

const postLogin = async (data: LoginFormValues) => {
    const response = await http.post<ApiResponse<LoginResponse>>(`${BASE_URL}/auth/login`, data);
    return response.data?.data
};

export default useLoginMutation;
