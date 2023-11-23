'use client'
import React from 'react';
import {Box, Flex} from "@radix-ui/themes";
import DashboardCardItem from "@/app/dashboard/components/DashBoardCardItem";
import PieChartCard from "@/app/dashboard/components/PieChartCard";
import DashBoardTable from "@/app/dashboard/components/DashBoardTable";
import useCustomerData, {mapDataToCustomerTable} from "@/api/hooks/useCustomerData";
import useMerchantData, {mapDataToMerchantTable} from "@/api/hooks/useMerchantData";
import useDashBoardStats, {mapDataToCard, mapDataToPieChart} from "@/api/hooks/useDashBoardStats";
import useDashBoardStore from "@/stores/dashboard";


const DashBoardOverViewPage = () => {

    const {selectedTransactionType} = useDashBoardStore()

    const {
        data: customerData,
        isLoading: isCustomerLoading,
        error: customerError
    } = useCustomerData();


    const {
        data: merchantData,
        isLoading: isMerchantLoading,
        error: merchantError
    } = useMerchantData();

    const {
        data: stats,
        isLoading: isStatsLoading,
        error: statsError
    } = useDashBoardStats();


    const populateChart = () => {
        const {chartData, legendData, metaData} = mapDataToPieChart(selectedTransactionType.value, stats!)
        return {chartData, legendData, metaData}
    }


    if (isCustomerLoading || isMerchantLoading || isStatsLoading) return <Box>Loading</Box>
    if (customerError || merchantError || statsError) return <Box>Error</Box>


    return (
        <Flex direction="column" gap="6" mt="7" px="6">
            <Flex gap="6">{mapDataToCard(stats!).map(
                item => <DashboardCardItem key={item.label} {...item}/>
            )}
            </Flex>
            <Flex gap="6">
                <PieChartCard chartData={populateChart().chartData} legendData={populateChart().legendData}
                              metaData={populateChart().metaData}/>
                <DashBoardTable href="/" description="Last 10 registered customers"
                                data={mapDataToCustomerTable(customerData!)}/>
            </Flex>
            <Flex gap="6">
                <DashBoardTable href="/" description="Last 10 merchants onboarded"
                                data={mapDataToMerchantTable(merchantData!)}/>
            </Flex>
        </Flex>
    );
};

export default DashBoardOverViewPage;