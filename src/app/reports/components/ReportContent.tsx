'use client'
import React from 'react';
import {Box} from "@radix-ui/themes";
import ReportLogoSection from "@/app/reports/components/ReportLogoSection";
import ReportStatSection from "@/app/reports/components/ReportStatSection";
import ReportTableInfo from "@/app/reports/components/ReportTableInfo";
import ReportCollectionsTable from "@/app/reports/components/ReportCollectionsTable";
import ReportDisbursementTable from "@/app/reports/components/ReportDisbursementTable";
import useMerchantReport from "@/app/reports/hooks/useMerchantReport";
import ReportLoaderSkeleton from "@/app/reports/loading";
import TitledHeader from "@/components/TitledHeader";

interface Props {
    id: string
}

const ReportContent = ({id}: Props) => {
    const {
        isLoading,
        mappedData,
        selectMerchantReportType,
        isStatsLoading,
        mappedDataBasicInfo,
        isBasicInfoLoading,
        mappedStatsData
    } = useMerchantReport(id)


    if (isLoading && isStatsLoading && isBasicInfoLoading) return <ReportLoaderSkeleton/>



    const showReportTableContent = () => {
        return selectMerchantReportType === 'COLLECTION' ?
            <ReportCollectionsTable
                data={mappedData?.customerData}
                isLoading={isLoading}
            /> :
            <ReportDisbursementTable
                data={mappedData?.customerData}
                isLoading={isLoading}
            />

    }

    return (
        <Box>
            <TitledHeader title="Reports"/>
            <ReportLogoSection data={mappedDataBasicInfo} isLoading={isBasicInfoLoading}/>
            <ReportStatSection data={mappedStatsData ?? {}} isLoading={isStatsLoading}/>
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