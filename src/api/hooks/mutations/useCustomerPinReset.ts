import {useMutation, useQueryClient} from "@tanstack/react-query";
import http from "@/api/http";
import {ApiResponse, Merchant} from "@/utils/types/dto";
import {isAxiosError} from "axios";
import {toast} from "react-toastify";

const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`;

const useCustomerPinResetMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({id}: { id: string }) =>
            resetCustomerPin(id),
        onSuccess: () => queryClient.invalidateQueries({queryKey: ['customers']}),
    });
};

// send put request
const resetCustomerPin = async (id: string) => {
    await http.put<ApiResponse<Merchant>>(`${BASE_URL}/customers/${id}/reset-pin`);
};


const useCustomerPinReset = () => {
    const {mutateAsync, isSuccess, isPending} = useCustomerPinResetMutation();

    const onPinReset = async (id: string) => {
        try {
            await mutateAsync({id});
            toast.success(" Customer pin successfully reset",)
        } catch (error) {
            if (isAxiosError(error) && error.response?.status && error.response.status >= 400 && error.response.status < 500) {
                const errorData: any = error.response.data
                toast.error(errorData.message || 'Something went wrong. Please try again.');
            } else {
                toast.error('Something went wrong. Please try again.');
            }
        }

    }

    return {onPinReset, isPending}

}

export default useCustomerPinReset

