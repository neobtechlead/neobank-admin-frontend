import {useQuery} from "@tanstack/react-query";
import http from "@/api/http";
import {APIResponse, Customer, CustomersResponse} from "@/utils/types/dto";
import {IRow, ITable} from "@/utils/types/table";


const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`


const columns = [
    {key: 'firstName', label: 'First Name'},
    {key: 'lastName', label: 'Last Name'},
    {key: 'phoneNumber', label: 'Phone Number'},
    {key: 'mobileNetwork', label: 'Mobile Network'},
]

const useCustomerData = () => {
    return useQuery({
        queryKey: ["customers"],
        queryFn: async () => {
            const response = await http.get<APIResponse<CustomersResponse>>(`${BASE_URL}/customers`)
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
            // @ts-ignore
            else rowData[key] = item[key] || "";
        });

        return rowData;
    });

    return {columns, rows};
};
