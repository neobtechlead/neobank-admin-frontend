import useMerchantCreateMutation from "@/api/hooks/mutations/useMerchantCreateMutation";
import {useForm} from "react-hook-form";
import {MerchantCreationFormOneValues, MerchantCreationFormTwoValues} from "@/utils/types/form";
import {isAxiosError} from "axios";
import {toast} from "react-toastify";

const useMerchantCreationForm = (formOneDefaultValues: MerchantCreationFormOneValues) => {
    const {mutateAsync, isPending, isSuccess} = useMerchantCreateMutation()

    const methods = useForm<MerchantCreationFormTwoValues>({
        mode: "onBlur" || "onSubmit",
    });

    const onSubmit = async (values: MerchantCreationFormTwoValues) => {
        try {
            const payload = {...formOneDefaultValues, ...values} //merge form in step one and form  step two values
            await mutateAsync({data: payload as any});
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

export default useMerchantCreationForm