import {useQuery} from "@tanstack/react-query";
import http from "@/api/http";
import {APIResponse, Merchant, PaginatedResponse} from "@/utils/types/dto";
import {IRow, ITable} from "@/utils/types/table";


const BASE_URL = `${process.env.NEXT_PUBLIC_MERCHANT_BASE_URL}`


const columns = [
    {key: 'businessName', label: 'Merchant Business Name'},
    {key: 'tradingName', label: 'Merchant Trading Name'},
    {key: 'externalId', label: 'Merchant ID'},
    {key: 'address', label: 'Merchant Address'},
    {key: 'country', label: 'Country'},

]


const useMerchantData = (page = 0, size = 10, order = "desc") => {
    return useQuery({
        queryKey: ["merchants", page, size, order],
        queryFn: async () => {
            const response = await http.get<APIResponse<PaginatedResponse<Merchant>>>(`${BASE_URL}/merchants`, {
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

        const rowData: IRow = {};
        const columnKeys = columns.map(item => item.key)

        columnKeys.forEach((key) => {


            if (key === 'address') rowData[key] = item.address?.city
            else if (key === 'country') rowData[key] = item.address?.country
            else if (key === 'externalId') rowData[key] = item[key]?.substring(0, 7)
            // @ts-ignore
            else rowData[key] = item[key] || "";
        });

        console.log(rowData)


        return rowData;
    });

    return {columns, rows};
};


