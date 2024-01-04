import {useQuery} from "@tanstack/react-query";
import http from "@/api/http";
import type {ApiResponse, PaginatedTransactionsData, Transaction} from "@/utils/types/dto";

const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`

const DEFAULT_ROWS = 10

const useMerchantTransactions = (id: string, rows = DEFAULT_ROWS, type = "COLLECTION") => {


    return useQuery({
        queryKey: ["merchant-transactions", rows, id, type],
        queryFn: async () => {
            const response = await http.get<ApiResponse<PaginatedTransactionsData<Transaction>>>(`${BASE_URL}/merchants/${id}/transactions`, {
                params: {type, rows}
            })
            return response.data?.data
        },
    })

}

export default useMerchantTransactions




