import {useForm} from "react-hook-form";
import {UserFormValues} from "@/utils/types/form";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast} from "react-toastify";
import {isAxiosError} from "axios";
import useUserUpdateMutation from "@/api/hooks/mutations/useUserUpdateMutation";
import {UserModificationSchema} from "@/utils/validations/schema/users";

const useUpdateUsersForm = (defaultValues: UserFormValues, userId: string) => {
    const {mutateAsync, isPending} = useUserUpdateMutation(userId);
    const {
        formState: {isDirty, dirtyFields, isSubmitting, isValid, errors},
        handleSubmit,
        register,
    } = useForm<UserFormValues>({
        defaultValues,
        resolver: zodResolver(UserModificationSchema),
        mode: "onBlur" || "onSubmit",
    });


    const onSubmit = async (values: UserFormValues) => {
        try {
            const payload: UserFormValues = {
                ...(dirtyFields.firstName && {firstName: values.firstName}),
                ...(dirtyFields.lastName && {lastName: values.lastName}),
                ...(dirtyFields.email && {email: values.email}),
            };

            await mutateAsync({id: userId, data: payload});
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
        isPending,
        isDirty,
        isSubmitting,
        isValid,
        errors
    }

}

export default useUpdateUsersForm