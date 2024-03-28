import {useQuery} from "@tanstack/react-query";
import http from "@/api/http";
import type {ApiResponse, DashBoardStats} from "@/utils/types/dto";
import StoreFront from "@/assets/svgs/BadgeStoreFront.svg";
import UserThree from "@/assets/svgs/BadgeUserThree.svg";
import EllipseGreen from "@/assets/svgs/EllipseG.svg";
import EllipseRed from "@/assets/svgs/EllipseR.svg";
import {convertPesewasToCedis, formatCurrency} from "@/utils/functions";
import {color} from "@/utils/constants"

const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`


const useDashBoardStats = () => {
    return useQuery({
        queryKey: ["dashBoardStats"],
        queryFn: async () => {
            const response = await http.get<ApiResponse<DashBoardStats>>(`${BASE_URL}/reports/stats`)
            return response.data?.data
        },
    })
};

export default useDashBoardStats;


export const mapDataToCard = ({totalAccounts: {CUSTOMER, MERCHANT}}: DashBoardStats) => {
    return [
        {label: "Merchants", totalCounts: `${MERCHANT ?? 0}`, icon: StoreFront},
        {label: "Customers", totalCounts: `${CUSTOMER ?? 0}`, icon: UserThree}
    ]

}


export const mapDataToPieChart = (transactionType: string, stats: DashBoardStats) => {


    let {
        totalSuccessfulDisbursementValue: successfulDisbursementsValue,
        totalFailedDisbursementValue: failedDisbursementsValue,
        totalSuccessfulCollectionValue: successfulCollectionsValue,
        totalFailedCollectionValue: failedCollectionsValue,
        totalDisbursementValue: totalDisbursementsValue,
        totalCollectionValue: totalCollectionsValue
    } = stats

    totalDisbursementsValue = (successfulDisbursementsValue ?? 0) + (failedDisbursementsValue ?? 0)
    totalCollectionsValue = (successfulCollectionsValue ?? 0) + (failedCollectionsValue ?? 0)


    const map = {
        disbursements: {
            legendData: [
                {
                    title: "Successful",
                    content: `GHS ${formatCurrency(convertPesewasToCedis(successfulDisbursementsValue ?? 0))}`,
                    icon: EllipseGreen
                },
                {
                    title: "Failed",
                    content: `GHS ${formatCurrency(convertPesewasToCedis(failedDisbursementsValue ?? 0))}`,
                    icon: EllipseRed
                },
            ],

            chartData: {
                labels: ['Successful', 'Failed'],
                datasets: [
                    {
                        label: '',
                        data: [convertPesewasToCedis(successfulDisbursementsValue ?? 0), convertPesewasToCedis(failedDisbursementsValue ?? 0)],
                        backgroundColor: [color.chartGreen, color.chartRed],
                        borderColor: [color.white, color.white],
                        borderWidth: 1,
                    },
                ],
            },

            metaData: {
                label: "Total Disbursements",
                value: `GHS ${formatCurrency(convertPesewasToCedis(totalDisbursementsValue ?? 0))}`
            }

        },

        collections: {
            legendData: [
                {
                    title: "Successful",
                    content: `GHS ${formatCurrency(convertPesewasToCedis(successfulCollectionsValue ?? 0))}`,
                    icon: EllipseGreen
                },
                {
                    title: "Failed",
                    content: `GHS ${formatCurrency(convertPesewasToCedis(failedCollectionsValue ?? 0))}`,
                    icon: EllipseRed
                },
            ],

            chartData: {
                labels: ['Successful', 'Failed'],
                datasets: [
                    {
                        label: '',
                        data: [convertPesewasToCedis(successfulCollectionsValue ?? 0), convertPesewasToCedis(failedCollectionsValue ?? 0)],
                        backgroundColor: [color.chartGreen, color.chartRed],
                        borderColor: [color.white, color.white],
                        borderWidth: 1,

                    },

                ],
            },
            metaData: {
                label: "Total Collections",
                value: `GHS ${formatCurrency(convertPesewasToCedis(totalCollectionsValue ?? 0))}`
            }

        },


    }

    return map[(transactionType as "disbursements" | "collections")];


}



