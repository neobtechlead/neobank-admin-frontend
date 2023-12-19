import {useQuery} from "@tanstack/react-query";
import http from "@/api/http";
import type {ApiResponse, Merchant, PaginatedResponse} from "@/utils/types/dto";
import type {ITable} from "@/utils/types/table";


const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`


const columns = [
    {key: 'updatedAt', label: 'Date'},
    {key: 'businessName', label: 'Merchant Business Name'},
    {key: 'tradingName', label: 'Merchant Trading Name'},
    {key: 'neobankAccountNumber', label: 'Merchant ID'},
    {key: 'address', label: 'Merchant Address'},
    {key: 'balanceAfter', label: 'Balance'},

]

const fakeData = [
    {
        "updatedAt": "2023-12-10T12:45:30",
        "businessName": "JKL Furniture",
        "tradingName": "JKL Home Decor",
        "neobankAccountNumber": "777766665",
        "address": "202 Oakwood Lane, Homestead, State, 34567",
        "balanceAfter": "$9,300.00"
    },
    {
        "updatedAt": "2023-12-09T18:20:15",
        "businessName": "RST Sports",
        "tradingName": "RST Sportswear",
        "neobankAccountNumber": "444433332",
        "address": "567 Stadium Drive, Sportstown, State, 78901",
        "balanceAfter": "$4,800.00"
    },
    {
        "updatedAt": "2023-12-08T09:10:00",
        "businessName": "UVW Pharmacy",
        "tradingName": "UVW Health Solutions",
        "neobankAccountNumber": "888877776",
        "address": "303 Wellness Avenue, Pharmatown, State, 23456",
        "balanceAfter": "$7,200.00"
    },
    {
        "updatedAt": "2023-12-07T14:55:45",
        "businessName": "GHI Automotive",
        "tradingName": "GHI Auto Services",
        "neobankAccountNumber": "222211110",
        "address": "404 Mechanic Street, Autoville, State, 56789",
        "balanceAfter": "$10,500.00"
    },
    {
        "updatedAt": "2023-12-06T21:30:30",
        "businessName": "NOP Cosmetics",
        "tradingName": "NOP Beauty Emporium",
        "neobankAccountNumber": "666655554",
        "address": "909 Glamour Lane, Beautytown, State, 89012",
        "balanceAfter": "$2,500.00"
    },
    {
        "updatedAt": "2023-12-15T10:23:45",
        "businessName": "ABC Electronics",
        "tradingName": "ABC Tech Solutions",
        "neobankAccountNumber": "123456789",
        "address": "123 Main Street, Cityville, State, 12345",
        "balanceAfter": "$5,000.00"
    },
    {
        "updatedAt": "2023-12-14T15:45:30",
        "businessName": "XYZ Clothing",
        "tradingName": "XYZ Fashion Outlet",
        "neobankAccountNumber": "987654321",
        "address": "456 Oak Avenue, Townsville, State, 54321",
        "balanceAfter": "$8,500.00"
    },
    {
        "updatedAt": "2023-12-13T08:12:15",
        "businessName": "PQR Appliances",
        "tradingName": "PQR Electronics",
        "neobankAccountNumber": "555555555",
        "address": "789 Pine Road, Villagetown, State, 67890",
        "balanceAfter": "$3,200.00"
    },
    {
        "updatedAt": "2023-12-12T14:30:00",
        "businessName": "LMN Books",
        "tradingName": "LMN Bookstore",
        "neobankAccountNumber": "111122223",
        "address": "101 Library Street, Booksville, State, 45678",
        "balanceAfter": "$12,000.00"
    },
    {
        "updatedAt": "2023-12-11T20:01:45",
        "businessName": "EFG Groceries",
        "tradingName": "EFG Supermart",
        "neobankAccountNumber": "999988887",
        "address": "789 Market Avenue, Shopville, State, 23456",
        "balanceAfter": "$6,750.00"
    },
]

const useMerchantReportTableData = (page = 0, size = 10, order = "desc") => {
    return useQuery({
        queryKey: ["transactions", page, size, order],
        queryFn: async () => {
            const response = await http.get<ApiResponse<PaginatedResponse<Merchant>>>(`${BASE_URL}/transactions`, {
                params: {page, size, order}
            })
            return response.data?.data
        },
    })
};

export default useMerchantReportTableData;


export const mapDataToMerchantReportTable = (data: any): ITable => {
    /*const {content} = data
    const rows: IRow[] = content.map((item: Merchant) => {
        const externalId = item.externalId ?? ""

        const rowData: IRow = {externalId};

        const columnKeys = columns.map(item => item.key)

        columnKeys.forEach((key) => {
            if (key === 'address') rowData[key] = item.address?.city
            else rowData[key] = (item as any)[key] ?? ""
        });

        return rowData;
    });*/

    return {columns, rows: fakeData};
};


