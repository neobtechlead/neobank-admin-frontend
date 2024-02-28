'use client'
import React from 'react';
import {Box} from "@radix-ui/themes";
import NoActivityWrapper from "@/components/NoActivityWrapper";
import EmptyPlaceholder from "@/assets/images/emptyplaceholderreport.png";
import ReportTabs from "@/app/reports/components/ReportTabs";
import MerchantReport from "@/app/reports/components/MerchantReport";
import CustomerReport from "@/app/reports/components/CustomerReport";
import useReport from "@/app/reports/hooks/useReport";
import ReportsLoaderSkeleton from "@/app/reports/loading";
import Header from "@/app/overview/components/Header";

const ReportPage = () => {

    const {
        mappedCustomerData,
        mappedMerchantData,
        isMerchantDataLoading,
        isCustomerDataLoading,
        selectedReportTab
    }
        = useReport()

    if (isMerchantDataLoading && isCustomerDataLoading) return <ReportsLoaderSkeleton/>

    if ((!isMerchantDataLoading && mappedMerchantData.rows?.length === 0) && (!isCustomerDataLoading && mappedCustomerData.rows?.length === 0)) return <NoActivityWrapper
        btnLabel=""
        description="You have no data available for reports yet. This section will display information when transactions are made."
        item="reports"
        iconPlaceHolder={EmptyPlaceholder}
    />

    const showReportContent = () => {
        return selectedReportTab === 'merchants' ?
            <MerchantReport
                isLoading={isMerchantDataLoading}
                data={mappedMerchantData}
            /> : <CustomerReport
                isLoading={isCustomerDataLoading}
                data={mappedCustomerData}
            />
    }
    return (
        <Box>
            <Header/>
            <Box className="p-5">
                <ReportTabs/>
                <Box className="border p-10  my-10 rounded-lg shadow-sm">
                    {showReportContent()}
                </Box>
            </Box>
        </Box>
    );
};

export default ReportPage;