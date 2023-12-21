import {useQuery} from "@tanstack/react-query";
import http from "@/api/http";
import type {ApiResponse, PaginatedTransactionsData, Transaction} from "@/utils/types/dto";
import type {IRow, ITable} from "@/utils/types/table";
import {format, parseISO} from "date-fns";
import {convertPesewasToCedis, formatCurrencyAlt} from "@/utils/functions";


const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`


const COLUMNS = [
    {key: "updatedAt", label: "Date"},
    {key: "businessName", label: "Merchant Business Name"},
    {key: "tradingName", label: "Merchant Trading Name"},
    {key: "issuerId", label: "Merchant ID"},
    {key: "address", label: "Merchant Address"},
    {key: "balanceAfter", label: "Balance"},
];


const DEFAULT_ROWS = 10;

const useMerchantReportTableData = (rows = DEFAULT_ROWS, startDate = "", endDate = "", type = "", status = "") => {
    const params: any = {
        rows,
        ...(startDate && {"start-date": startDate}),
        ...(endDate && {"end-date": endDate}),
        ...(type && {type}),
        ...(status && {status}),
    };
    return useQuery({
        queryKey: ["merchant-reports", startDate, endDate, type, status],
        queryFn: async () => {
            const response = await http.get<ApiResponse<PaginatedTransactionsData<Transaction>>>(`${BASE_URL}/reports/merchants`, {
                params
            })
            return response.data?.data
        },
    })
};

export default useMerchantReportTableData;


export const mapDataToMerchantReportTable = (data: PaginatedTransactionsData<Transaction>): ITable => {
    const {transactions} = data
    const rows: IRow[] = transactions.map((item: Transaction) => {
        const externalId = item.externalId ?? ""

        const rowData: IRow = {externalId};

        const columnKeys = COLUMNS.map(item => item.key)

        columnKeys.forEach((key) => {
            if (key === 'address') rowData[key] = item.address?.city
            else if (key === 'updatedAt') rowData[key] = format(parseISO(item.updatedAt), 'dd-MM-yyyy')
            else if (key === 'balanceAfter') rowData[key] = formatCurrencyAlt(convertPesewasToCedis(item.balanceAfter))
            else rowData[key] = (item as any)[key] ?? ""
        });

        return rowData;
    });

    return {columns: COLUMNS, rows};
};


