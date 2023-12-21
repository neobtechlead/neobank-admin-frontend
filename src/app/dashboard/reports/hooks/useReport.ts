import useReportStores from "@/stores/reports";
import useMerchantReportTableData, {mapDataToMerchantReportTable} from "@/api/hooks/queries/useMerchantReportTableData";
import {useMemo} from "react";
import {mapDataToCustomerReportTable} from "@/api/hooks/queries/useCustomerReportTableData";

const useReport = () => {

    const {selectedReportTab} = useReportStores()
    const {data: merchantData, isLoading: isMerchantLoading} = useMerchantReportTableData()

    const mappedMerchantData = useMemo(() => {
        if (!merchantData) return {columns: [], rows: []};
        return mapDataToMerchantReportTable(merchantData)


    }, [merchantData])


    const mappedCustomerData = useMemo(() => {
        return mapDataToCustomerReportTable({})

    }, [])


    return {mappedMerchantData, mappedCustomerData, isMerchantLoading, selectedReportTab}

}

export default useReport