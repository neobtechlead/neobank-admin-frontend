import {useQuery} from "@tanstack/react-query";
import http from "@/api/http";
import type {ActivityLogsDTO, ApiResponse, PaginatedResponse} from "@/utils/types/dto";
import type {IRow, ITable} from "@/utils/types/table";
import {format, parseISO} from "date-fns";
import {convertPesewasToCedis, formatCurrencyAlt} from "@/utils/functions";


const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`


const columns = [
    {key: 'createdAt', label: 'Date'},
    {key: 'activityType', label: 'Activity'},
    {key: 'merchantName', label: 'Merchant Name'},
    {key: 'balanceBefore', label: 'Previous Balance'},
    {key: 'balanceAfter', label: 'Balance After'},
    {key: 'amount', label: 'Amount'},

]

const useGetActivityLogs = (page = 0, size = 10, merchantName = '') => {


    return useQuery({
        queryKey: ["activity-logs", page, size, merchantName],
        queryFn: async () => {
            const response = await http.get<ApiResponse<PaginatedResponse<ActivityLogsDTO>>>(`${BASE_URL}/merchants/activity-logs`, {
                params: {page, size, ...(merchantName && {merchantName})}
            })
            return response.data?.data
        },
    })
};

export default useGetActivityLogs;


export const mapDataToActivityLogTable = (data: PaginatedResponse<ActivityLogsDTO>): ITable => {
    const {content} = data
    const rows: IRow[] = content.map((item: ActivityLogsDTO) => {
        const externalId = item.externalId || "";

        const rowData: IRow = {externalId};
        const columnKeys = columns.map(item => item.key)

        columnKeys.forEach((key) => {
            if (key === 'createdAt') rowData[key] = format(parseISO(item.createdAt), 'dd-MM-yyyy')
            else if (key === 'activityType') rowData[key] = formatActivityType(item.activityType)
            else if (key === 'balanceAfter') rowData[key] = formatCurrencyAlt(convertPesewasToCedis(parseInt(item.balanceAfter)))
            else if (key === 'balanceBefore') rowData[key] = formatCurrencyAlt(convertPesewasToCedis(parseInt(item.balanceBefore)))
            else if (key === 'amount') rowData[key] = formatCurrencyAlt(convertPesewasToCedis(parseInt(item.amount)))
            else rowData[key] = (item as any)[key] ?? ""
        });

        return rowData;
    });

    return {columns, rows};
};

const formatActivityType = (activityType: string) => {
    return (activityType === 'BALANCE_MODIFICATION') ? 'Balance Modification' : activityType;
}


