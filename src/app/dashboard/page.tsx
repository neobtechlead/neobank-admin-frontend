'use client'
import React from 'react';
import {Flex} from "@radix-ui/themes";
import StoreFront from "@/assets/svgs/BadgeStoreFront.svg"
import UserThree from "@/assets/svgs/BadgeUserThree.svg"
import DashBoardCard from "@/app/dashboard/components/DashBoardCard";
import EllipseGreen from "@/assets/svgs/EllipseG.svg"
import EllipseRed from "@/assets/svgs/EllipseR.svg"
import DashboardCardItem from "@/app/dashboard/components/DashBoardCardItem";
import PieChartCard from "@/app/dashboard/components/PieChartCard";

const clientsData = [
    {label: "Merchants", totalCounts: "84", icon: StoreFront},
    {label: "Customers", totalCounts: "5,456", icon: UserThree}
]

const pieChartData = {
    labels: ['Successful Disbursement', 'Failed Disbursement'],
    datasets: [
        {
            label: '',
            data: [78500, 56500],
            backgroundColor: [
                '#3BB33B',
                '#DC4040',
            ],
            borderColor: [
                '#3BB33B',
                '#DC4040',

            ],
            borderWidth: 1,
        },
    ],
};

const pieChartLegendData = [
    {title: "Successful Disbursement", content: "GHS 78,500", icon: EllipseGreen},
    {title: "Failed Disbursement", content: "GHS 56,500", icon: EllipseRed},
]


const DashBoardOverViewPage = () => {
    return (
        <Flex direction="column" gap="6" mt="7" px="7">
            <Flex gap="6">{clientsData.map(
                item => <DashboardCardItem key={item.label} {...item}/>
            )}
            </Flex>
            <Flex gap="6">
                <PieChartCard chartData={pieChartData} legendData={pieChartLegendData}/>
                <DashBoardCard>
                </DashBoardCard>

            </Flex>
        </Flex>
    );
};

export default DashBoardOverViewPage;