import {useForm} from "react-hook-form";
import {isAxiosError} from "axios";
import {toast} from "react-toastify";
import {zodResolver} from "@hookform/resolvers/zod";
import {ResetPasswordSchema, ResetPasswordValues} from "@/utils/validations/schema/login";
import useResetPasswordMutation from "@/api/hooks/mutations/useResetPasswordMutation";

const useResetPasswordForm = (token: string) => {
    const {mutateAsync, isPending, isSuccess} = useResetPasswordMutation(token)

    const methods = useForm<ResetPasswordValues>({
        defaultValues: {
            password: '',
            confirmPassword: '',
        },
        resolver: zodResolver(ResetPasswordSchema),
        mode: "onBlur" || "onSubmit",
    });

    const onSubmit = async (values: ResetPasswordValues) => {
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

export default useResetPasswordForm