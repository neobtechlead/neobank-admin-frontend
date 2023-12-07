import {useMutation, useQueryClient} from "@tanstack/react-query";
import {MerchantFormValues} from "@/utils/types/form";
import http from "@/api/http";
import {APIResponse, Merchant} from "@/utils/types/dto";

const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`;

const useMerchantMutation = (id: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({id, data}: { id: string; data: MerchantFormValues }) =>
            patchMerchant(id, data),
        onSuccess: () => queryClient.invalidateQueries({queryKey: ['merchants', id]}),
    });
};

const patchMerchant = async (id: string, data: MerchantFormValues) => {

    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value as string | Blob);
    });

    await http.patch<APIResponse<Merchant>>(`${BASE_URL}/merchants/${id}`, formData);
};

export default useMerchantMutation;
