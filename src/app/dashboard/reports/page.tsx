'use client'
import React, {useMemo} from 'react';
import {Box} from "@radix-ui/themes";
import NoActivityWrapper from "@/components/NoActivityWrapper";
import EmptyPlaceholder from "@/assets/images/emptyplaceholderreport.png";
import ReportTabs from "@/app/dashboard/reports/components/ReportTabs";
import useReportStores from "@/stores/reports";
import MerchantReport from "@/app/dashboard/reports/components/MerchantReport";
import CustomerReport from "@/app/dashboard/reports/components/CustomerReport";
import {mapDataToMerchantReportTable} from "@/api/hooks/queries/useMerchantReportTableData";
import {mapDataToCustomerReportTable} from "@/api/hooks/queries/useCustomerReportTableData";

const ReportPage = () => {

    const {selectReportTab} = useReportStores()

    const mappedData = useMemo(() => {
        const merchantData = mapDataToMerchantReportTable({})
        const customerData = mapDataToCustomerReportTable({})
        return {merchantData, customerData}
    }, [])

    if (mappedData?.merchantData?.rows?.length === 0) return <NoActivityWrapper btnLabel=""
                                                                                description="You have no data available for reports yet. This section will display information when transactions are made."
                                                                                item="reports"
                                                                                iconPlaceHolder={EmptyPlaceholder}
    />

    const showReportContent = () => {
        return selectReportTab === 'merchants' ?
            <MerchantReport
                data={mappedData.merchantData}
            /> : <CustomerReport
                data={mappedData.customerData}
            />
    }
    return (
        <Box className="p-5">
            <ReportTabs/>
            <Box className="border p-10  my-10 rounded-lg shadow-sm">
                {showReportContent()}
            </Box>
        </Box>
    );
};

export default ReportPage;