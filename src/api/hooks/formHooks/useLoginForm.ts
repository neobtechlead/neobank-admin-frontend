import {useForm} from "react-hook-form";
import {isAxiosError} from "axios";
import {toast} from "react-toastify";
import {zodResolver} from "@hookform/resolvers/zod";
import {LoginFormValues, LoginSchema} from "@/utils/validations/schema/login";
import useLoginMutation from "@/api/hooks/mutations/useLoginMutation";
import useAuthStore from "@/stores/auth";
import {useRouter} from "next/navigation";
import {LoginResponse} from "@/utils/types/auth";

const useLoginForm = () => {

    const router = useRouter()
    const {login, logout} = useAuthStore()


    const {mutateAsync, isPending, isSuccess, data} = useLoginMutation()
    const methods = useForm<LoginFormValues>({
        defaultValues: {
            password: '',
            email: '',
        },
        resolver: zodResolver(LoginSchema),
        mode: "onBlur" || "onSubmit",
    });


    const onSubmit = async (values: LoginFormValues) => {
        try {
            const response = await mutateAsync({data: values});
            login(response as LoginResponse)
            router.replace("/overview")

        } catch (error) {
            logout()
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

export default useLoginForm