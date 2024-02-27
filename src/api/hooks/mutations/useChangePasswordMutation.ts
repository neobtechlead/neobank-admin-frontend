import {useMutation} from "@tanstack/react-query";
import http from "@/api/http";
import {ApiResponse} from "@/utils/types/dto";
import {ChangePasswordValues} from "@/utils/validations/schema/profile";
import {LoginResponse} from "@/utils/types/auth";

const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`;

const useChangePasswordMutation = () => {

    return useMutation({
        mutationFn: ({data}: { data: ChangePasswordValues }) =>
            postChangePassword(data),
    });
};

const postChangePassword = async ({currentPassword, password: newPassword}: ChangePasswordValues) => {
    await http.post<ApiResponse<LoginResponse>>(`${BASE_URL}/auth/update-password`, {currentPassword, newPassword});
};

export default useChangePasswordMutation;
