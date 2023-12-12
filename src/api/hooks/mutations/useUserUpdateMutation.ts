import {useMutation, useQueryClient} from "@tanstack/react-query";
import {UserFormValues} from "@/utils/types/form";
import http from "@/api/http";
import {ApiResponse, User} from "@/utils/types/dto";

const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`;

const useUserUpdateMutation = (id: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({id, data}: { id: string; data: UserFormValues }) =>
            patchUser(id, data),
        onSuccess: () => queryClient.invalidateQueries({queryKey: ['users', id]}),
    });
};

const patchUser = async (id: string, data: UserFormValues) => {
    await http.patch<ApiResponse<User>>(`${BASE_URL}/merchants/users/${id}`, data);
};

export default useUserUpdateMutation;
