import {useQuery} from "@tanstack/react-query";
import http from "@/api/http";
import {ApiResponse, MerchantsRoles} from "@/utils/types/dto";
import {FormFields} from "@/utils/types/form";

const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`


const useGetMerchantsAndRoles = () => {
    return useQuery({
        queryKey: ["merchant-roles"],
        queryFn: async () => {
            const response = await http.get<ApiResponse<MerchantsRoles>>(`${BASE_URL}/merchants/all-merchants-and-roles`)
            return response.data?.data
        },
    })
};

export default useGetMerchantsAndRoles;


export const mapApiDataToFormFields = (data: MerchantsRoles | undefined, isLoading: boolean): FormFields[] => {
    if (isLoading && !data) return [
        {label: 'First Name', name: 'firstName', type: 'input', required: true},
        {label: 'Last Name', name: 'lastName', type: 'input', required: true},
        {label: 'Date of birth', name: 'dob', type: 'date'},
        {label: 'Address', name: 'address', type: 'input', required: true},
        {label: 'National Id', name: 'nationalId', type: 'input', required: true},
        {
            label: 'Merchant Name',
            name: 'merchant',
            type: 'select',
            required: true,
            defaultValue: {label: "Select Merchant", value: ""},
            options: [{label: "", value: ""}]
        },
        {label: 'Email', name: 'email', type: 'input', required: true},
        {label: 'Phone', name: 'phoneNumber', type: 'input', required: true},
        {
            label: 'Account role/type',
            name: 'role', type: 'select',
            required: true,
            defaultValue: {label: "Select Role", value: ""},
            options: [{label: "", value: ""}]
        },
    ]
    else {
        const {merchants, roles} = data!
        return [
            {label: 'First Name', name: 'firstName', type: 'input', required: true},
            {label: 'Last Name', name: 'lastName', type: 'input', required: true},
            {label: 'Date of birth', name: 'dob', type: 'date'},
            {label: 'Address', name: 'address', type: 'input', required: true},
            {label: 'National Id', name: 'nationalId', type: 'input', required: true},
            {
                label: 'Merchant Name',
                name: 'merchant',
                required: true,
                type: 'select',
                defaultValue: {label: merchants[0], value: merchants[0]},
                options: merchants.map((merchant) => ({label: merchant, value: merchant})),
            },
            {label: 'Email', name: 'email', type: 'input', required: true},
            {label: 'Phone', name: 'phoneNumber', type: 'input', required: true},
            {
                label: 'Account role/type',
                name: 'role',
                type: 'select',
                required: true,
                defaultValue: {label: roles[0], value: roles[0]},
                options: roles.map((role) => ({label: role, value: role})),
            },
        ];

    }


};


