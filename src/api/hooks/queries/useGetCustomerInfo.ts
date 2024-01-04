import {useQuery} from "@tanstack/react-query";
import http from "@/api/http";
import type {ApiResponse, Customer} from "@/utils/types/dto";
import UserCircle from "@/assets/svgs/UserCircle.svg";
import Phone from "@/assets/svgs/Phone.svg";


const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`


const useGetCustomerInfo = (id: string) => {
    return useQuery({
        queryKey: ["customers", id],
        queryFn: async () => {
            const response = await http.get<ApiResponse<Customer>>(`${BASE_URL}/customers/${id}`)
            return response.data?.data
        },
    })
};

export default useGetCustomerInfo;


export const mapToCustomerDetailsView = (data: Customer) => {
    const {firstName, lastName, phoneNumber} = data

    return {
        info: [
            {label: "First Name", value: firstName ?? "N/A", icon: UserCircle},
            {label: "Last Name", value: lastName ?? "N/A", icon: UserCircle},
            {label: "Phone Number", value: phoneNumber ?? "N/A", icon: Phone},
            {label: "Mobile Network", value: "MTN", icon: Phone},
        ],
        issuerId: phoneNumber
    }

}








