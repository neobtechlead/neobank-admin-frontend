import {useQuery} from "@tanstack/react-query";
import http from "@/api/http";
import {APIResponse, Customer} from "@/utils/types/dto";

const useCustomerData = () => {
    return useQuery({
        queryKey: ["customers"],
        queryFn: async () => {
            const response = await http.get<APIResponse<Customer>>("/api/temp/customers")
            return response.data?.data
        },
    })
};

export default useCustomerData;
