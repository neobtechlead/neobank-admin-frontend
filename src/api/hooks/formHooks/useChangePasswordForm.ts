import {useForm} from "react-hook-form";
import {isAxiosError} from "axios";
import {toast} from "react-toastify";
import {zodResolver} from "@hookform/resolvers/zod";
import {ChangePasswordSchema, ChangePasswordValues} from "@/utils/validations/schema/profile";
import useChangePasswordMutation from "@/api/hooks/mutations/useChangePasswordMutation";

const useChangePasswordForm = () => {
    const {mutateAsync, isPending, isSuccess} = useChangePasswordMutation()

    const methods = useForm<ChangePasswordValues>({
        defaultValues: {
            currentPassword: '',
            password: '',
            confirmPassword: '',
        },
        resolver: zodResolver(ChangePasswordSchema),
        mode: "onBlur" || "onSubmit",
    });

    const onSubmit = async (values: ChangePasswordValues) => {
        try {
            await mutateAsync({data: values});
            toast.success('Your password has been updated successfully');
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

export default useChangePasswordForm