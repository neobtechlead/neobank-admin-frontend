'use client'
import React from 'react';
import useReportStores from "@/stores/report/reports";
import {Flex, Text} from "@radix-ui/themes";
import Image from "next/image";
import Coins from "@/assets/svgs/HandCoins.svg"
import Upload from "@/assets/svgs/Upload.svg"

const ReportTableInfo = () => {

    const {selectMerchantReportType, updateSelectedMerchantReportType} = useReportStores()

    const btnClasses = (tabName: string) => `p-6 transition duration-300 ease-in-out ${selectMerchantReportType === tabName ? 'border-b-4 border-purple-900 font-bold' : ''}`

    return (
        <Flex gap="4" className="border-t border-b px-10">
            <button className={btnClasses('COLLECTION')}
                    onClick={() => updateSelectedMerchantReportType("COLLECTION")}>
                <div className="flex gap-2  ">
                    <Image src={Coins} alt=""/>
                    <Text>Collections</Text>
                </div>
            </button>

            <button className={btnClasses('DISBURSEMENT')}
                    onClick={() => updateSelectedMerchantReportType("DISBURSEMENT")}>
                <div className="flex gap-2">
                    <Image src={Upload} alt=""/>
                    <Text>Disbursements</Text>
                </div>
            </button>

        </Flex>
    );
};

export default ReportTableInfo;