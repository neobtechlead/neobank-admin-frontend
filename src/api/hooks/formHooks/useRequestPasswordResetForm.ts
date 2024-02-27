import {useForm} from "react-hook-form";
import {isAxiosError} from "axios";
import {toast} from "react-toastify";
import {zodResolver} from "@hookform/resolvers/zod";
import {RequestPasswordResetSchema, RequestPasswordResetValues} from "@/utils/validations/schema/login";
import useRequestPasswordReset from "@/api/hooks/mutations/useRequestPasswordReset";

const useRequestPasswordResetForm = () => {
    const {mutateAsync, isPending, isSuccess} = useRequestPasswordReset()

    const methods = useForm<RequestPasswordResetValues>({
        defaultValues: {
            email: '',
        },
        resolver: zodResolver(RequestPasswordResetSchema),
        mode: "onBlur" || "onSubmit",
    });

    const onSubmit = async (values: RequestPasswordResetValues) => {
        try {
            await mutateAsync({data: values});
        } catch (error) {
            if (isAxiosError(error) && error.response?.status && error.response.status >= 400 && error.response.status < 500) {
                const errorData: any = error.response.data
                toast.error(errorData.message || 'Something went wrong. Please try again.');
            } else {
                toast.error('Something went wrong. Please try again.');
            }
        }

    }
    return {
        onSubmit,
        isPending,
        methods,
        isSuccess
    }


}

export default useRequestPasswordResetForm