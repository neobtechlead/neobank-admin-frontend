import {useQuery} from "@tanstack/react-query";
import http from "@/api/http";
import type {APIResponse, Customer, CustomersResponse} from "@/utils/types/dto";
import type {IRow, ITable} from "@/utils/types/table";


const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`


const columns = [
    {key: 'firstName', label: 'First Name'},
    {key: 'lastName', label: 'Last Name'},
    {key: 'phoneNumber', label: 'Phone Number'},
    {key: 'mobileNetwork', label: 'Mobile Network'},
]

const useCustomerData = (pageNumber = 0, pageSize = 10) => {
    return useQuery({
        queryKey: ["customers", pageNumber, pageSize],
        queryFn: async () => {
            const response = await http.get<APIResponse<CustomersResponse>>(`${BASE_URL}/customers`, {
                params: {pageNumber, pageSize}
            })
            return response.data?.data
        },
    })
};

export default useCustomerData;


export const mapDataToCustomerTable = (data: CustomersResponse): ITable => {
    const {data: customers, metaData} = data
    const rows: IRow[] = customers.map((item: Customer) => {

        const rowData: IRow = {};

        const columnKeys = columns.map(item => item.key)

        columnKeys.forEach((key) => {
            if (key === 'mobileNetwork') rowData[key] = "MTN" //To be removed awaiting backend changes
            else rowData[key] = (item as any)[key] ?? ""
        });

        return rowData;
    });

    return {columns, rows};
};
