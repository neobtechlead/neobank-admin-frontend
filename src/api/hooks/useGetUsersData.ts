import {useQuery} from "@tanstack/react-query";
import http from "@/api/http";
import type {APIResponse, PaginatedResponse, User} from "@/utils/types/dto";
import type {IRow, ITable} from "@/utils/types/table";


const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`


const columns = [
    {key: 'firstName', label: 'First Name'},
    {key: 'lastName', label: 'Last Name'},
    {key: 'phoneNumber', label: 'Phone Number'},
    {key: 'email', label: 'Email'},
    {key: 'merchant', label: 'Linked Merchant'},
    {key: 'role', label: 'Role'},

]

const useGetUsersData = (page = 0, size = 10) => {
    return useQuery({
        queryKey: ["merchants", page, size],
        queryFn: async () => {
            const response = await http.get<APIResponse<PaginatedResponse<User>>>(`${BASE_URL}/merchants/users`, {
                params: {page, size}
            })
            return response.data?.data
        },
    })
};

export default useGetUsersData;


export const mapDataToUsersTable = (data: PaginatedResponse<User>): ITable => {
    const {content} = data
    const rows: IRow[] = content.map((item: User) => {
        const externalId = item.userExternalId || "";

        const rowData: IRow = {externalId};
        const columnKeys = columns.map(item => item.key)

        columnKeys.forEach((key) => {
            if (key === 'merchant') rowData[key] = item.merchant?.businessName
            else if (key === 'role') rowData[key] = item.roles?.[0]
            else rowData[key] = (item as any)[key] ?? ""
        });

        return rowData;
    });

    return {columns, rows};
};


