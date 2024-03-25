import {useQuery} from "@tanstack/react-query";
import http from "@/api/http";
import type {ApiResponse, User} from "@/utils/types/dto";
import {BasicInfoItem} from "@/utils/types/misc";


const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`


const useGetUserInfo = (id: string) => {
    return useQuery({
        queryKey: ["users", id],
        queryFn: async () => {
            const response = await http.get<ApiResponse<User>>(`${BASE_URL}/merchants/users/${id}`)
            return response.data?.data
        },
    })
};

export default useGetUserInfo;


export const mapDataToBasicUserInfo = (data: User): BasicInfoItem[][] => {
    return [
        [
            {field: 'nationalId', label: 'National ID', value: data.nationalId ?? "N/A"},
            {field: 'dateOfBirth', label: 'Date of birth', value: data.dateOfBirth ?? "N/A"},
            {field: 'address', label: 'Address', value: data.merchant?.address?.streetAddress ?? "N/A"}
        ],
        [

            {field: 'phoneNumber', label: 'Phone Number', value: data.phoneNumber ?? "N/A"},
            {field: 'email', label: 'Email Address', value: data.email ?? "N/A"},
            {field: 'role', label: 'Account Role', value: data.roles?.[0] ?? 'N/A'},
        ],

        [
            {field: 'merchant', label: 'Merchant Name', value: data.merchant?.businessName ?? "N/A"},
        ],

    ];
};

export const mapDataToHeaderUserInfo = (data: User) => {
    const {firstName, lastName} = data
    return {
        name: `${firstName} ${lastName}`,
        firstName: firstName,
        lastName: lastName,
        email: data.email ?? "N/A"
    }

}






