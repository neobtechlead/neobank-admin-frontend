import {useMutation} from "@tanstack/react-query";
import http from "@/api/http";
import {ApiResponse} from "@/utils/types/dto";
import {RequestPasswordResetValues} from "@/utils/validations/schema/login";
import {LoginResponse} from "@/utils/types/auth";

const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`;

const useRequestPasswordReset = () => {

    return useMutation({
        mutationFn: ({data}: { data: RequestPasswordResetValues }) =>
            postRequestPasswordReset(data),
    });
};

const postRequestPasswordReset = async ({email}: RequestPasswordResetValues) => {
    return await http.post<ApiResponse<LoginResponse>>(`${BASE_URL}/auth/request-reset-password`, {email});
};

export default useRequestPasswordReset;
