import {useQuery} from "@tanstack/react-query";
import http from "@/api/http";
import type {ApiResponse, Customer, CustomersResponse} from "@/utils/types/dto";
import type {IRow, ITable} from "@/utils/types/table";


const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`


const columns = [
    {key: 'firstName', label: 'First Name'},
    {key: 'lastName', label: 'Last Name'},
    {key: 'phoneNumber', label: 'Phone Number'},
    {key: 'accountIssuer', label: 'Mobile Network'},
]

const useCustomerData = (pageNumber = 0, pageSize = 10, phoneNumber = '') => {
    return useQuery({
        queryKey: ["customers", pageNumber, pageSize, phoneNumber],
        queryFn: async () => {
            const response = await http.get<ApiResponse<CustomersResponse>>(`${BASE_URL}/customers`, {
                params: {pageNumber, pageSize, ...(phoneNumber && {phoneNumber})}
            })
            return response.data?.data
        },
    })
};

export default useCustomerData;


export const mapDataToCustomerTable = (data: CustomersResponse): ITable => {
    const {data: customers} = data
    const rows: IRow[] = customers.map((item: Customer) => {
        const externalId = item.externalId
        const rowData: IRow = {externalId};

        const columnKeys = columns.map(item => item.key)

        columnKeys.forEach((key) => {
            rowData[key] = (item as any)[key] ?? ""
        });

        return rowData;
    });

    return {columns, rows};
};
