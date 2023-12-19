import useMerchantUpdateMutation from "@/api/hooks/mutations/useMerchantUpdateMutation";
import {useForm} from "react-hook-form";
import {MerchantFormValues} from "@/utils/types/form";
import {zodResolver} from "@hookform/resolvers/zod";
import {MerchantModificationSchema} from "@/utils/validations/schema/merchants";
import {toast} from "react-toastify";
import {isAxiosError} from "axios";

const useMerchantUpdateForm = (defaultValues: MerchantFormValues, merchantId: string) => {

    const {mutateAsync, isPending} = useMerchantUpdateMutation(merchantId);

    const {
        formState: {isDirty, dirtyFields, isSubmitting, isValid, errors},
        handleSubmit,
        register,
    } = useForm<MerchantFormValues>({
        defaultValues,
        resolver: zodResolver(MerchantModificationSchema),
        mode: "onBlur" || "onSubmit",
    });


    const onSubmit = async (values: MerchantFormValues) => {
        try {
            const payload: MerchantFormValues = {
                ...(dirtyFields.balance && {balance: values.balance}),
                ...(dirtyFields.businessName && {businessName: values.businessName}),
                ...(dirtyFields.email && {email: values.email}),
                accountName: "Login Name" // To be removed
            };
            await mutateAsync({id: merchantId, data: payload});
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

export default useMerchantUpdateForm