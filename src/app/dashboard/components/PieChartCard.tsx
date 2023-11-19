import DashBoardCard from "@/app/dashboard/components/DashBoardCard";
import React from "react";
import {Box, Flex, Text} from "@radix-ui/themes";
import SimpleSelect from "@/components/SimpleSelect";
import PieChart from "@/components/charts/PieChart";
import TitledHeading from "@/components/TitledHeading";
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

const PieChartCard = ({chartData, legendData}: Props) => (
    <DashBoardCard>
        <Flex direction="column" p="6" gap="4">
            <Box className="md:self-end">
                <SimpleSelect/>
            </Box>
            <Flex className="flex-1" justify="between" align="center">
                <Box>
                    <PieChart data={chartData}/>
                </Box>
                <Flex direction="column">
                    <Text>Total Disbursements</Text>
                    <TitledHeading>GHS 135,000.00 </TitledHeading>
                </Flex>
            </Flex>
            <Flex gap="6">
                {legendData.map(item => <IconWithStackedHeadings key={item.title} {...item} />)}
            </Flex>
        </Flex>
    </DashBoardCard>
);

export default PieChartCard;