'use client'
import React from 'react';
import {Box} from "@radix-ui/themes";
import NoActivityWrapper from "@/components/NoActivityWrapper";
import EmptyPlaceholder from "@/assets/images/emptyplaceholderreport.png";
import ReportTabs from "@/app/dashboard/reports/components/ReportTabs";
import MerchantReport from "@/app/dashboard/reports/components/MerchantReport";
import CustomerReport from "@/app/dashboard/reports/components/CustomerReport";
import useReport from "@/app/dashboard/reports/hooks/useReport";

const ReportPage = () => {

    const {
        mappedCustomerData,
        mappedMerchantData,
        isMerchantLoading,
        selectedReportTab
    }
        = useReport()


    if (!isMerchantLoading && mappedMerchantData.rows?.length === 0) return <NoActivityWrapper btnLabel=""
                                                                                               description="You have no data available for reports yet. This section will display information when transactions are made."
                                                                                               item="reports"
                                                                                               iconPlaceHolder={EmptyPlaceholder}
    />

    const showReportContent = () => {
        return selectedReportTab === 'merchants' ?
            <MerchantReport
                isLoading={isMerchantLoading}
                data={mappedMerchantData}
            /> : <CustomerReport
                data={mappedCustomerData}
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