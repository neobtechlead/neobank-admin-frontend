import {useMutation, useQueryClient} from "@tanstack/react-query";
import http from "@/api/http";
import {ApiResponse, Balance} from "@/utils/types/dto";
import {useForm} from "react-hook-form";
import {isAxiosError} from "axios";
import {toast} from "react-toastify";
import {CustomerBalanceValues} from "@/utils/types/form";
import {useCustomerDetailsStore} from "@/stores/customer";
import {zodResolver} from "@hookform/resolvers/zod";
import {CustomerBalanceModificationSchema} from "@/utils/validations/schema/account";


const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`;

const useCustomerBalanceMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({id, data}: { id: string, data: any }) => postBalanceUpdate(id, data),
        onSuccess: () => queryClient.invalidateQueries({queryKey: ['customers-balance']}),
    });
};


// send put request
const postBalanceUpdate = async (id: string, data: any) => {
    const payload = {
        balance: data?.balance,
        accountName: "Login Name" //TBR
    }
    await http.post<ApiResponse<Balance>>(`${BASE_URL}/customers/${id}/balance`, payload);
};


const useCustomerBalanceUpdate = () => {
    const {issuerId} = useCustomerDetailsStore()
    const {mutateAsync, isPending} = useCustomerBalanceMutation();

    const {
        formState: {isSubmitting, isDirty, isValid, errors},
        handleSubmit,
        register,
    } = useForm<CustomerBalanceValues>({
        mode: "onBlur" || "onSubmit",
        resolver: zodResolver(CustomerBalanceModificationSchema)
    });


    const onSubmit = async (values: CustomerBalanceValues) => {
        try {
            await mutateAsync({id: issuerId, data: {balance: values.newBalance}});
            toast.success(" Customer balance updated successfully",)
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