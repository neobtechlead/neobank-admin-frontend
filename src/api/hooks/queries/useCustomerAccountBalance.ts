import {useQuery} from "@tanstack/react-query";
import http from "@/api/http";
import type {ApiResponse, Balance} from "@/utils/types/dto";
import {useCustomerDetailsStore} from "@/stores/customer";

const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`


const useCustomerAccountBalance = () => {
    const {issuerId} = useCustomerDetailsStore()
    return useQuery({
        queryKey: ["customers-balance", issuerId],
        queryFn: async () => {
            const response = await http.get<ApiResponse<Balance>>(`${BASE_URL}/customers/${issuerId}/balance`)
            return response.data?.data
        },
    })
};

export default useCustomerAccountBalance;



