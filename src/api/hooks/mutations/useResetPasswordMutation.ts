import {useMutation} from "@tanstack/react-query";
import http from "@/api/http";
import {ApiResponse} from "@/utils/types/dto";
import {ResetPasswordValues} from "@/utils/validations/schema/login";
import {LoginResponse} from "@/utils/types/auth";

const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`;

const useResetPasswordMutation = (token: string) => {

    return useMutation({
        mutationFn: ({data}: { data: ResetPasswordValues }) =>
            postResetPassword(token, data),
    });
};

const postResetPassword = async (token: string, {password}: ResetPasswordValues) => {
    await http.post<ApiResponse<LoginResponse>>(`${BASE_URL}/auth/reset-password`, {password}, {
        params: {token}
    });
};

export default useResetPasswordMutation;
