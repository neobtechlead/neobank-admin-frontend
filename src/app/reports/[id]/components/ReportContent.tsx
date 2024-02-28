'use client'
import React from 'react';
import {Box} from "@radix-ui/themes";
import ReportLogoSection from "@/app/reports/[id]/components/ReportLogoSection";
import ReportStatSection from "@/app/reports/[id]/components/ReportStatSection";
import ReportTableInfo from "@/app/reports/[id]/components/ReportTableInfo";
import ReportCollectionsTable from "@/app/reports/[id]/components/ReportCollectionsTable";
import ReportDisbursementTable from "@/app/reports/[id]/components/ReportDisbursementTable";
import useMerchantReport from "@/app/reports/[id]/hooks/useMerchantReport";
import ReportLoaderSkeleton from "@/app/reports/[id]/loading";
import TitledHeader from "@/components/TitledHeader";
import {useParams} from "next/navigation";

const ReportContent = () => {

    const params = useParams<{ id: string }>()
    const id = params.id
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
            <ReportStatSection data={mappedStatsData ?? {}} isLoading={isStatsLoading} id={id}/>
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