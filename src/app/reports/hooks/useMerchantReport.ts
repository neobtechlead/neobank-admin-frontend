import useReportStores from "@/stores/report/reports";
import {useCollectionReportStore, useDisbursementReportStore} from "@/stores/report/merchantReport";
import useMerchantTransactions from "@/api/hooks/queries/useMerchantTransactions";
import {useEffect, useMemo} from "react";
import {mapDataToCustomerReportTable} from "@/api/hooks/queries/useCustomerReportTableData";
import {PaginatedTransactionsData, Transaction} from "@/utils/types/dto";
import useMerchantStats, {mapDataReportStats} from "@/api/hooks/queries/useMerchantStats";
import useGetMerchantInfo, {mapDataToHeaderInfo} from "@/api/hooks/queries/useGetMerchantInfo";

const useMerchantReport = (id: string) => {

    const {selectMerchantReportType} = useReportStores()

    const reportTypeStore = selectMerchantReportType === 'COLLECTION' ? useCollectionReportStore() : useDisbursementReportStore();
    const {selectedPageSize, updatePagination} = reportTypeStore;


    const {data, isLoading} = useMerchantTransactions(id, parseInt(selectedPageSize.value), selectMerchantReportType)
    const {data: statsData, isLoading: isStatsLoading} = useMerchantStats(id)

    const {data: merchantBasicInfo, isLoading: isBasicInfoLoading,} = useGetMerchantInfo(id);

    // map data to report table section
    const mappedData = useMemo(() => {
        if (!data) return {customerData: {columns: [], rows: []}}
        const customerData = mapDataToCustomerReportTable(data)
        return {customerData}
    }, [data])

    // map data to report stats section
    const mappedStatsData = useMemo(() => {
        if (!statsData) return null
        return mapDataReportStats(statsData)

    }, [statsData])

    const mappedDataBasicInfo = useMemo(() => {
        if (merchantBasicInfo) {
            return mapDataToHeaderInfo(merchantBasicInfo)
        }
    }, [merchantBasicInfo])








    useEffect(() => {
        if (data) {
            const {
                meta: {offset},
                pagination: {totalElements, firstPage, lastPage, size},
                transactions
            } = data as PaginatedTransactionsData<Transaction>
            const numberOfElements = transactions.length
            updatePagination({last: lastPage, first: firstPage, offset, totalElements, numberOfElements})

        }


    }, [data, selectMerchantReportType])


    return {
        mappedData,
        isLoading,
        isStatsLoading,
        mappedDataBasicInfo,
        isBasicInfoLoading,
        mappedStatsData,
        selectMerchantReportType
    }

}

export default useMerchantReport