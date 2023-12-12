import {useMutation, useQueryClient} from "@tanstack/react-query";
import {MerchantCreationFormValues} from "@/utils/types/form";
import http from "@/api/http";
import {ApiResponse, Merchant} from "@/utils/types/dto";

const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`;

const useMerchantCreateMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({data}: { data: MerchantCreationFormValues }) =>
            postMerchant(data),
        onSuccess: () => queryClient.invalidateQueries({queryKey: ['merchants']}),
    });
};

const postMerchant = async (data: MerchantCreationFormValues) => {

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            value.forEach((item, index) => {
                Object.entries(item).forEach(([nestedKey, nestedValue]) => {
                    formData.append(`${key}[${index}].${nestedKey}`, nestedValue as string | Blob);
                });
            });
        } else {
            formData.append(key, value);
        }
    });

    await http.post<ApiResponse<Merchant>>(`${BASE_URL}/merchants`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
};

export default useMerchantCreateMutation;
