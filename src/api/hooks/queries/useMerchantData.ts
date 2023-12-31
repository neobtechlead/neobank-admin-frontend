import {useQuery} from "@tanstack/react-query";
import http from "@/api/http";
import type {ApiResponse, Merchant, PaginatedResponse} from "@/utils/types/dto";
import type {IRow, ITable} from "@/utils/types/table";


const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`


const columns = [
    {key: 'businessName', label: 'Merchant Business Name'},
    {key: 'tradingName', label: 'Merchant Trading Name'},
    {key: 'neobankAccountNumber', label: 'Merchant ID'},
    {key: 'address', label: 'Merchant Address'},
    {key: 'country', label: 'Country'},

]

const useMerchantData = (page = 0, size = 10, order = "desc") => {
    return useQuery({
        queryKey: ["merchants", page, size, order],
        queryFn: async () => {
            const response = await http.get<ApiResponse<PaginatedResponse<Merchant>>>(`${BASE_URL}/merchants`, {
                params: {page, size, order}
            })
            return response.data?.data
        },
    })
};

export default useMerchantData;


export const mapDataToMerchantTable = (data: PaginatedResponse<Merchant>): ITable => {
    const {content} = data
    const rows: IRow[] = content.map((item: Merchant) => {
        const externalId = item.externalId ?? ""

        const rowData: IRow = {externalId};

        const columnKeys = columns.map(item => item.key)

        columnKeys.forEach((key) => {
            if (key === 'address') rowData[key] = item.address?.city
            else if (key === 'country') rowData[key] = item.address?.country
            else rowData[key] = (item as any)[key] ?? ""
        });

        return rowData;
    });

    return {columns, rows};
};


