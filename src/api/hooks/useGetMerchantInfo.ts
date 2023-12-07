import {useQuery} from "@tanstack/react-query";
import http from "@/api/http";
import type {APIResponse, Merchant} from "@/utils/types/dto";
import {BasicInfoItem, DocInfoItem} from "@/utils/types/misc";


const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`


const useGetMerchantInfo = (id: string) => {
    return useQuery({
        queryKey: ["merchants", id],
        queryFn: async () => {
            const response = await http.get<APIResponse<Merchant>>(`${BASE_URL}/merchants/${id}`)
            return response.data?.data
        },
    })
};

export default useGetMerchantInfo;


export const mapDataToBasicInfo = (data: Merchant): BasicInfoItem[][] => {
    return [
        [
            {field: 'tradingName', label: 'Trading Name', value: data.tradingName ?? "N/A"},
            {field: 'digitalAddress', label: 'Residential Address', value: data.address?.digitalAddress ?? 'N/A'},
        ],
        [
            {field: 'country', label: 'Country', value: data.address?.country ?? "N/A"},
            {field: 'state', label: 'Region', value: data.address?.state ?? "N/A"},
        ],
        [
            {field: 'zipCode', label: 'Zip Code', value: data.address?.zipCode ?? "N/A"},
            {field: 'streetAddress', label: 'Street', value: data.address?.streetAddress ?? 'N/A'},
        ],
        [
            {
                field: 'email',
                label: 'Email Address',
                value: data.merchantAccountHolders?.[0].email ?? "N/A",
                editable: true
            },
            {field: 'phoneNumber', label: 'Phone Number', value: data.phoneNumber ?? "N/A", editable: true},
        ],
        [
            {field: 'descriptionOfService', label: 'Description of Service', value: data.descriptionOfService ?? "N/A"},
        ],
    ];
};

export const mapDataToDocInfo = (data: Merchant): DocInfoItem[] => {
    return [
        {
            label: 'Certificate of registration',
            value: data.certificateOfRegistration ?? "",
            href: data.certificateOfRegistration ?? "",
            field: 'certificateOfRegistration',
        },
        {
            label: 'Certificate of incorporation',
            value: data.certificateOfIncorporation ?? "",
            href: data.certificateOfIncorporation ?? "",
            field: 'certificateOfIncorporation',
        },
        {
            label: 'Tax clearance certificate',
            value: data.taxClearanceCertificate ?? "",
            href: data.taxClearanceCertificate ?? "",
            field: 'taxClearanceCertificate',

        },
        {
            label: "Director's National ID",
            value: data.directorNationalIds?.[0]?.nationalIdPhoto ?? "",
            href: data.directorNationalIds?.[0]?.nationalIdPhoto ?? "",
            field: 'nationalIdPhoto',
        },
        {
            label: 'ID Type',
            value: data.directorNationalIds?.[0]?.nationalIdType ?? "",
            href: "",
            field: 'nationalIdType',
        },
        {
            label: 'Constitution Bye/Laws',
            value: data.constitutionByeLaws ?? "",
            href: data.constitutionByeLaws ?? "",
            field: 'constitutionByeLaws',
        },
    ];
};

export const mapDataToHeaderInfo = (data: Merchant) => {
    return {
        businessName: data.businessName ?? "",
        email: data.merchantAccountHolders?.[0]?.email ?? "N/A"
    }

}






