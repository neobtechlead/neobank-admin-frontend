import {useQuery} from "@tanstack/react-query";
import http from "@/api/http";
import {APIResponse, Customer} from "@/utils/types/dto";
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
            const response = await http.get<APIResponse<Customer[]>>(`${BASE_URL}/customers`)
            return response.data?.data
        },
    })
};

export default useCustomerData;


export const mapDataToCustomerTable = (data: Customer[]): ITable => {
    const rows: IRow[] = data.map((item: Customer) => {
        const id = item.id || ""; // Assuming 'id' is always present in the Customer Data
        const rowData: IRow = {id};

        const columnKeys = columns.map(item => item.key)

        columnKeys.forEach((key) => {
            // @ts-ignore
            rowData[key] = item[key] || "";
        });

        return rowData;
    });

    return {columns, rows};
};
