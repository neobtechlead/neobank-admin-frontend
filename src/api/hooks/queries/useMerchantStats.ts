import {useQuery} from "@tanstack/react-query";
import http from "@/api/http";
import type {ApiResponse, MerchantStats} from "@/utils/types/dto";


const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`


const useMerchantStats = (id: string) => {
    return useQuery({
        queryKey: ["merchant-stats", id],
        queryFn: async () => {
            const response = await http.get<ApiResponse<MerchantStats>>(`${BASE_URL}/merchants/${id}/stats`)
            return response.data?.data
        },
    })
};

export default useMerchantStats;


export const mapDataReportStats = (data: MerchantStats) => {
    const {users, disbursementValue, collectionValue} = data
    return {users, disbursementValue, collectionValue}

};
