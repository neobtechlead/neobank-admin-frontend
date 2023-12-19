import {useQuery} from "@tanstack/react-query";
import http from "@/api/http";
import type {ApiResponse, Merchant, PaginatedResponse} from "@/utils/types/dto";
import type {ITable} from "@/utils/types/table";


const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`


const columns = [
    {key: 'updatedAt', label: 'Date'},
    {key: 'externalId', label: 'Transaction ID'},
    {key: 'senderName', label: 'Sender Name'},
    {key: 'recipientName', label: 'Recipient Name'},
    {key: 'amount', label: 'Amount'},
    {key: 'type', label: 'Type'},
    {key: 'status', label: 'Status'},
    {key: 'balanceAfter', label: 'Post Balance'},
]

const fakeData = [
    {
        "updatedAt": "2023-12-15T10:23:45",
        "externalId": "T123456789",
        "senderName": "John Doe",
        "recipientName": "Jane Smith",
        "amount": 500,
        "type": "Collection",
        "status": "Successful",
        "balanceAfter": 200,
    },
    {
        "updatedAt": "2023-12-14T15:45:30",
        "externalId": "T987654321",
        "senderName": "Alice Johnson",
        "recipientName": "Bob Williams",
        "amount": 800,
        "type": "Collection",
        "status": "Successful",
        "balanceAfter": 400,
    },
    {
        "updatedAt": "2023-12-13T08:12:15",
        "externalId": "T555555555",
        "senderName": "Eva Davis",
        "recipientName": "Mark Wilson",
        "amount": 320,
        "type": "Collection",
        "status": "Successful",
        "balanceAfter": 200,
    },
    {
        "updatedAt": "2023-12-12T14:30:00",
        "externalId": "T111122223",
        "senderName": "Chris Taylor",
        "recipientName": "Lily Brown",
        "amount": 1200,
        "type": "Collection",
        "status": "Successful",
        "balanceAfter": 1000,
    },
    {
        "updatedAt": "2023-12-11T20:01:45",
        "externalId": "T999988887",
        "senderName": "Samuel Clark",
        "recipientName": "Emily White",
        "amount": 675,
        "type": "Collection",
        "status": "Successful",
        "balanceAfter": 200,
    },
    {
        "updatedAt": "2023-12-15T10:23:45",
        "externalId": "T123456789",
        "senderName": "John Doe",
        "recipientName": "Jane Smith",
        "amount": 500,
        "type": "Collection",
        "status": "Successful",
        "balanceAfter": 200,
    },
    {
        "updatedAt": "2023-12-14T15:45:30",
        "externalId": "T987654321",
        "senderName": "Alice Johnson",
        "recipientName": "Bob Williams",
        "amount": 800,
        "type": "Collection",
        "status": "Successful",
        "balanceAfter": 200,
    },
    {
        "updatedAt": "2023-12-13T08:12:15",
        "externalId": "T555555555",
        "senderName": "Eva Davis",
        "recipientName": "Mark Wilson",
        "amount": 320,
        "type": "Collection",
        "status": "Successful",
        "balanceAfter": 200,
    },
    {
        "updatedAt": "2023-12-12T14:30:00",
        "externalId": "T111122223",
        "senderName": "Chris Taylor",
        "recipientName": "Lily Brown",
        "amount": 1200,
        "type": "Collection",
        "status": "Successful",
        "balanceAfter": 200,
    },
    {
        "updatedAt": "2023-12-11T20:01:45",
        "externalId": "T999988887",
        "senderName": "Samuel Clark",
        "recipientName": "Emily White",
        "amount": 675,
        "type": "Collection",
        "status": "Successful",
        "balanceAfter": 200,
    },
]

const useCustomerReportTableData = (page = 0, size = 10, order = "desc") => {
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

export default useCustomerReportTableData;


export const mapDataToCustomerReportTable = (data: any): ITable => {
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


