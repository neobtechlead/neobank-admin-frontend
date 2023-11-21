'use client'
import ContainerCard from "@/components/ContainerCard";
import React from "react";
import {Box, Flex, Heading, Text} from "@radix-ui/themes";
import PieChart from "@/components/charts/PieChart";
import IconWithStackedHeadings from "@/components/IconWithStackedHeadings";
import {ChartData} from "chart.js";
import {LegendData} from "@/utils/types/chart";
import CustomSelect from "@/components/CustomSelect";
import useDashBoardStore from "@/stores/dashboard";
import {color} from "@/utils/constants";


interface Props {
    chartData: ChartData;
    legendData: LegendData[];
}

const PieChartCard = ({chartData, legendData}: Props) => {

    const {selectedTransactionType, transactionTypes, onTransactionTypeChange} = useDashBoardStore()


    return (
        <ContainerCard>
            <Flex direction="column" p="6" gap="4">
                <Box className="md:self-end">
                    <CustomSelect
                        defaultValue={selectedTransactionType}
                        options={transactionTypes}
                        color={color.darkGray}
                        onSelectChange={onTransactionTypeChange}/>

                </Box>
                <Flex className="flex-1" justify="between" align="center">
                    <Box>
                        <PieChart data={chartData}/>
                    </Box>
                    <Flex direction="column">
                        <Text>Total Disbursements</Text>
                        <Heading>GHS 135,000.00 </Heading>
                    </Flex>
                </Flex>
                <Flex gap="6">
                    {legendData.map(item => <IconWithStackedHeadings key={item.title} {...item} />)}
                </Flex>
            </Flex>
        </ContainerCard>
    )


}



export default PieChartCard;