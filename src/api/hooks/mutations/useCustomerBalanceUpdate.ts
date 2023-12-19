import {useMutation, useQueryClient} from "@tanstack/react-query";
import http from "@/api/http";
import {ApiResponse, Balance} from "@/utils/types/dto";
import {useForm} from "react-hook-form";
import {isAxiosError} from "axios";
import {toast} from "react-toastify";
import {CustomerBalanceValues} from "@/utils/types/form";


const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`;

const useCustomerBalanceMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({id, data}: { id: string, data: any }) => postBalanceUpdate(id, data),
        onSuccess: () => queryClient.invalidateQueries({queryKey: ['customers']}),
    });
};


// send put request
const postBalanceUpdate = async (id: string, data: any) => {
    await http.post<ApiResponse<Balance>>(`${BASE_URL}/customers/${id}/balance`, data);
};


const useCustomerBalanceUpdate = (id: string, defaultValues: CustomerBalanceValues) => {
    const {mutateAsync, isPending} = useCustomerBalanceMutation();

    const {
        formState: {isSubmitting, isDirty, isValid, errors},
        handleSubmit,
        register,
    } = useForm<CustomerBalanceValues>({defaultValues, mode: "onBlur" || "onSubmit"});


    const onSubmit = async (values: any) => {
        try {
            console.log(values)
            //await mutateAsync({id, data: values});
        } catch (error) {
            if (isAxiosError(error) && error.response?.status && error.response.status >= 400 && error.response.status < 500) {
                const errorData: any = error.response.data
                toast.error(errorData.message || 'Something went wrong. Please try again.');
            } else {
                toast.error('Something went wrong. Please try again.');
            }

        }
    };


    return {
        onSubmit,
        handleSubmit,
        register,
        isDirty,
        isPending,
        isSubmitting,
        isValid,
        errors
    }

}


export default useCustomerBalanceUpdate