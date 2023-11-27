import {useQuery} from "@tanstack/react-query";
import http from "@/api/http";
import type {APIResponse, DashBoardStats} from "@/utils/types/dto";
import StoreFront from "@/assets/svgs/BadgeStoreFront.svg";
import UserThree from "@/assets/svgs/BadgeUserThree.svg";
import EllipseGreen from "@/assets/svgs/EllipseG.svg";
import EllipseRed from "@/assets/svgs/EllipseR.svg";
import {formatCurrency} from "@/utils/functions";
import {color} from "@/utils/constants"

const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`


const useDashBoardStats = () => {
    return useQuery({
        queryKey: ["dashBoardStats"],
        queryFn: async () => {
            const response = await http.get<APIResponse<DashBoardStats>>(`${BASE_URL}/reports/stats`)
            return response.data?.data
        },
    })
};

export default useDashBoardStats;


export const mapDataToCard = ({totalCustomers, totalMerchants}: DashBoardStats) => {
    return [
        {label: "Merchants", totalCounts: `${totalMerchants}`, icon: StoreFront},
        {label: "Customers", totalCounts: `${totalCustomers}`, icon: UserThree}
    ]

}


export const mapDataToPieChart = (transactionType: string, stats: DashBoardStats) => {


    const {
        successfulDisbursementsValue,
        failedDisbursementsValue,
        successfulCollectionsValue,
        failedCollectionsValue,
        totalTransactionsValue,
        totalDisbursementsValue,
        totalCollectionsValue
    } = stats

    const map = {
        disbursements: {
            legendData: [
                {
                    title: "Successful",
                    content: `GHS ${formatCurrency(successfulDisbursementsValue)}`,
                    icon: EllipseGreen
                },
                {
                    title: "Failed",
                    content: `GHS ${formatCurrency(failedDisbursementsValue)}`,
                    icon: EllipseRed
                },
            ],

            chartData: {
                labels: ['Successful', 'Failed'],
                datasets: [
                    {
                        label: '',
                        data: [successfulDisbursementsValue, failedDisbursementsValue],
                        backgroundColor: [color.chartGreen, color.chartRed],
                        borderColor: [color.white, color.white],
                        borderWidth: 1,
                    },
                ],
            },

            metaData: {label: "Total Disbursements", value: `GHS ${formatCurrency(totalDisbursementsValue)}`}


        },

        collections: {
            legendData: [
                {
                    title: "Successful",
                    content: `GHS ${formatCurrency(successfulCollectionsValue)}`,
                    icon: EllipseGreen
                },
                {
                    title: "Failed",
                    content: `GHS ${formatCurrency(failedCollectionsValue)}`,
                    icon: EllipseRed
                },
            ],

            chartData: {
                labels: ['Successful', 'Failed'],
                datasets: [
                    {
                        label: '',
                        data: [successfulCollectionsValue, failedCollectionsValue],
                        backgroundColor: [color.chartGreen, color.chartRed],
                        borderColor: [color.white, color.white],
                        borderWidth: 1,

                    },

                ],
            },
            metaData: {label: "Total Collections", value: `GHS ${formatCurrency(totalCollectionsValue)}`}

        },


    }

    return map[(transactionType as "disbursements" | "collections")];


}



