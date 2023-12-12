import {useMutation, useQueryClient} from "@tanstack/react-query";
import {UserCreationFormValues} from "@/utils/types/form";
import http from "@/api/http";
import {ApiResponse, User} from "@/utils/types/dto";

const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`;

const useUserCreateMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({data}: { data: UserCreationFormValues }) =>
            postUser(data),
        onSuccess: () => queryClient.invalidateQueries({queryKey: ['users']}),
    });
};

const postUser = async (data: UserCreationFormValues) => {
    await http.post<ApiResponse<User>>(`${BASE_URL}/merchants/users`, data);
};

export default useUserCreateMutation;
