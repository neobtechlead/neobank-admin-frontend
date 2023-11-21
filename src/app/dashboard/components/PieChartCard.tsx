'use client'
import ContainerCard from "@/components/ContainerCard";
import React, {useState} from "react";
import {Box, Flex, Heading, Text} from "@radix-ui/themes";
import PieChart from "@/components/charts/PieChart";
import IconWithStackedHeadings from "@/components/IconWithStackedHeadings";
import {ChartData} from "chart.js";
import {LegendData} from "@/utils/types/chart";
import CustomSelect from "@/components/CustomSelect";


interface Props {
    chartData: ChartData;
    legendData: LegendData[];
}

const PieChartCard = ({chartData, legendData}: Props) => {

    //To be moved to store
    const [selectedOption, setSelectedOption] = useState<string>('disbursements');
    const handleSelectChange = (value: string) => {
        setSelectedOption(value)
    }

    const selectOptions = [
        {value: 'disbursements', label: 'Disbursement'},
        {value: 'collections', label: 'Collections'},
    ];

    return (
        <ContainerCard>
            <Flex direction="column" p="6" gap="4">
                <Box className="md:self-end">
                    <CustomSelect
                        defaultValue={selectOptions[0]}
                        options={selectOptions}
                        color="#211F26"
                        onSelectChange={setSelectedOption}/>

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