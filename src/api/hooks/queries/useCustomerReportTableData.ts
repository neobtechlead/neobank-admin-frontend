import {useQuery} from "@tanstack/react-query";
import http from "@/api/http";
import type {ApiResponse, PaginatedTransactionsData, Transaction} from "@/utils/types/dto";
import type {IRow, ITable} from "@/utils/types/table";
import {format, parseISO} from "date-fns";
import {convertPesewasToCedis, formatCurrencyAlt} from "@/utils/functions";


const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`


const COLUMNS = [
    {key: 'updatedAt', label: 'Date'},
    {key: 'internalId', label: 'Transaction ID'},
    {key: 'initiatorName', label: 'Sender Name'},
    {key: 'accountName', label: 'Recipient Name'},
    {key: 'amount', label: 'Amount'},
    {key: 'type', label: 'Type'},
    {key: 'status', label: 'Status'},
    {key: 'balanceAfter', label: 'Post Balance'},
]


const DEFAULT_ROWS = 10;
const useCustomerReportTableData = (rows = DEFAULT_ROWS, startDate = "", endDate = "", type = "", status = "", phoneNumber = "") => {
    const params: any = {
        rows,
        ...(startDate && {"start-date": startDate}),
        ...(endDate && {"end-date": endDate}),
        ...(type && {type}),
        ...(status && {status}),
        ...(phoneNumber && {phoneNumber}),
    };
    return useQuery({
        queryKey: ["customer-reports", rows, startDate, endDate, type, status, phoneNumber],
        queryFn: async () => {
            const response = await http.get<ApiResponse<PaginatedTransactionsData<Transaction>>>(`${BASE_URL}/reports/customers`, {
                params
            })
            return response.data?.data
        },
    })
};

export default useCustomerReportTableData;


export const mapDataToCustomerReportTable = (data: PaginatedTransactionsData<Transaction>): ITable => {
    const {transactions} = data
    const rows: IRow[] = transactions?.map((item: Transaction) => {
        const externalId = item.externalId ?? ""

        const rowData: IRow = {externalId};

        const columnKeys = COLUMNS.map(item => item.key)

        columnKeys.forEach((key) => {
            if (key === 'updatedAt') rowData[key] = format(parseISO(item.updatedAt), 'dd-MM-yyyy')
            else if (key === 'amount') rowData[key] = formatCurrencyAlt(convertPesewasToCedis(item.amount))
            else if (key === 'balanceAfter') rowData[key] = formatCurrencyAlt(convertPesewasToCedis(item.balanceAfter))
            else rowData[key] = (item as any)[key] ?? ""
        });

        return rowData;
    });

    return {columns: COLUMNS, rows: rows ?? []};
};


