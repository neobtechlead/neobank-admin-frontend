'use client'
import React, {useMemo} from 'react';
import {Box} from "@radix-ui/themes";
import ReportLogoSection from "@/app/reports/components/ReportLogoSection";
import ReportStatSection from "@/app/reports/components/ReportStatSection";
import ReportTableInfo from "@/app/reports/components/ReportTableInfo";
import useReportStores from "@/stores/reports";
import ReportCollectionsTable from "@/app/reports/components/ReportCollectionsTable";
import ReportDisbursementTable from "@/app/reports/components/ReportDisbursementTable";
import {mapDataToCustomerReportTable} from "@/api/hooks/queries/useCustomerReportTableData";

const ReportContent = () => {

    const {selectMerchantReportType} = useReportStores()

    const mappedData = useMemo(() => {
        const customerData = mapDataToCustomerReportTable({})
        return {customerData}
    }, [])


    const showReportTableContent = () => {
        return selectMerchantReportType === 'collections' ?
            <ReportCollectionsTable data={mappedData?.customerData ?? []}/> :
            <ReportDisbursementTable data={mappedData?.customerData ?? []}/>

    }

    return (
        <Box>
            <ReportLogoSection/>
            <ReportStatSection/>
            <ReportTableInfo/>
            <Box className="m-12">
                {
                    showReportTableContent()

                }
            </Box>


        </Box>
    );
};

export default ReportContent;