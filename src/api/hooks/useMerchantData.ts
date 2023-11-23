import {useQuery} from "@tanstack/react-query";
import http from "@/api/http";
import {APIResponse, Merchant} from "@/utils/types/dto";
import {IRow, ITable} from "@/utils/types/table";


const dashBoardColumns = [
    {key: 'businessName', label: 'Merchant Business Name'},
    {key: 'tradingName', label: 'Trading Name'},
    {key: 'externalId', label: 'Merchant ID'},
    {key: 'address', label: 'Merchant Address'},
    {key: 'country', label: 'Country'},
]

const useMerchantData = () => {
    return useQuery({
        queryKey: ["merchants"],
        queryFn: async () => {
            const response = await http.get<APIResponse<Merchant[]>>("/api/temp/merchants")
            return response.data?.data
        },
    })
};

export default useMerchantData;


export const mapDataToMerchantTable = (data: Merchant[]): ITable => {
    const rows: IRow[] = data.map((item: Merchant) => {
        const externalId = item.externalId || ""; // Assuming 'id' is always present in the Customer Data
        const rowData: IRow = {externalId};

        const columnKeys = dashBoardColumns.map(item => item.key)

        columnKeys.forEach((key) => {
            // @ts-ignore
            rowData[key] = item[key] || "";
        });

        return rowData;
    });

    return {columns: dashBoardColumns, rows};
};
