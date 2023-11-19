'use client'
import ContainerCard from "@/components/ContainerCard";
import React, {useState} from "react";
import {Box, Flex, Heading, Text} from "@radix-ui/themes";
import BasicSelect from "@/components/BasicSelect";
import PieChart from "@/components/charts/PieChart";
import IconWithStackedHeadings from "@/components/IconWithStackedHeadings";


interface ChartData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string[];
        borderColor: string[];
        borderWidth: number;
    }[];
}

interface LegendData {
    title: string;
    content: string;
    icon: string;
}

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
                    <BasicSelect
                        options={selectOptions}
                        onSelectChange={handleSelectChange}
                        defaultValue={selectedOption}
                        className={`px-5 py-7 font-semibold`}
                    />
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