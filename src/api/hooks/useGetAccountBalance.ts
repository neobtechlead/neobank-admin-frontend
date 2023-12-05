import {useQuery} from "@tanstack/react-query";
import http from "@/api/http";
import type {APIResponse, Balance} from "@/utils/types/dto";

const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`


const useGetAccountBalance = (id: string) => {
    return useQuery({
        queryKey: ["merchant", id],
        queryFn: async () => {
            const response = await http.get<APIResponse<Balance>>(`${BASE_URL}/merchants/${id}/balance`)
            return response.data?.data
        },
    })
};

export default useGetAccountBalance;



