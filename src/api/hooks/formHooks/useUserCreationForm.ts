import {useForm} from "react-hook-form";
import {UserCreationFormValues} from "@/utils/types/form";
import {isAxiosError} from "axios";
import {toast} from "react-toastify";
import useUserCreateMutation from "@/api/hooks/mutations/useUserCreateMutation";
import {zodResolver} from "@hookform/resolvers/zod";
import {UserCreationFormSchema} from "@/utils/validations/schema/users";

const useUserCreationForm = () => {
    const {mutateAsync, isPending, isSuccess} = useUserCreateMutation()

    const methods = useForm<UserCreationFormValues>({
        defaultValues: {
            firstName: '',
            lastName: '',
            role: '',
            merchant: '',
            address: '',
            dob: '',
            nationalId: '',
            phoneNumber: '',
            email: '',
        },
        resolver: zodResolver(UserCreationFormSchema),
        mode: "onBlur" || "onSubmit",
    });

    const onSubmit = async (values: UserCreationFormValues) => {
        try {
            console.log(values)
            await mutateAsync({data: values});
            methods.reset() //reset form after successful creation
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

export default useUserCreationForm