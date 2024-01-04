import useReportStores from "@/stores/report/reports";
import useMerchantReportTableData, {mapDataToMerchantReportTable} from "@/api/hooks/queries/useMerchantReportTableData";
import {useEffect, useMemo} from "react";
import useCustomerReportTableData, {mapDataToCustomerReportTable} from "@/api/hooks/queries/useCustomerReportTableData";
import {PaginatedTransactionsData, Transaction, TransactionReport} from "@/utils/types/dto";
import {
    useCustomerReportFilterStore,
    useCustomerReportStore,
    useMerchantReportFilterStore,
    useMerchantReportStore
} from "@/stores/report/merchantReport";
import {formatDateAsISO} from "@/utils/functions";
import {isEmpty} from "lodash";

const useReport = () => {

    const {selectedReportTab} = useReportStores()
    let {formStoreParams: {merchant, startDate, endDate, status}} = useMerchantReportFilterStore()
    let {
        formStoreParams: {
            phoneNumber,
            type,
            startDate: startDate_c,
            endDate: endDate_c,
            status: status_c
        }
    } = useCustomerReportFilterStore()
    const {selectedPageSize: merchantRows, updatePagination: updateMerchantPagination} = useMerchantReportStore()
    const {selectedPageSize: customerRows, updatePagination: updateCustomerPagination} = useCustomerReportStore()


    startDate = startDate ? formatDateAsISO(startDate) : ""
    endDate = endDate ? formatDateAsISO(endDate) : ""

    startDate_c = startDate_c ? formatDateAsISO(startDate_c) : ""
    endDate_c = endDate_c ? formatDateAsISO(endDate_c) : ""


    const {
        data: merchantData,
        isLoading: isMerchantDataLoading
    } = useMerchantReportTableData(parseInt(merchantRows.value), startDate, endDate, "", status?.value, merchant?.value)
    const {
        data: customerData,
        isLoading: isCustomerDataLoading
    } = useCustomerReportTableData(parseInt(customerRows.value), startDate_c, endDate_c, type?.value, status_c?.value, phoneNumber)


    //update pagination info in store
    useEffect(() => {
        if (!isEmpty(merchantData)) {
            const {
                meta: {offset},
                pagination: {totalElements, firstPage, lastPage},
                transactions
            } = merchantData as PaginatedTransactionsData<TransactionReport>
            const numberOfElements = transactions.length
            updateMerchantPagination({last: lastPage, first: firstPage, offset, totalElements, numberOfElements})

        }

        if (!isEmpty(customerData)) {
            const {
                meta: {offset},
                pagination: {totalElements, firstPage, lastPage, size},
                transactions
            } = customerData as PaginatedTransactionsData<Transaction>
            const numberOfElements = transactions.length
            updateCustomerPagination({last: lastPage, first: firstPage, offset, totalElements, numberOfElements})
        }


    }, [merchantData, customerData])


    const mappedMerchantData = useMemo(() => {
        if (isEmpty(merchantData)) return {columns: [], rows: []};
        return mapDataToMerchantReportTable(merchantData)


    }, [merchantData])


    const mappedCustomerData = useMemo(() => {
        if (isEmpty(customerData)) return {columns: [], rows: []};
        return mapDataToCustomerReportTable(customerData)

    }, [customerData])


    return {
        mappedMerchantData,
        mappedCustomerData,
        isMerchantDataLoading,
        isCustomerDataLoading,
        selectedReportTab
    }

}

export default useReport