'use client'
import React, {useMemo} from 'react';
import {Box, Flex} from "@radix-ui/themes";
import TitledHeader from "@/components/TitledHeader";
import AvatarSection from "@/components/AvatarSection";
import BalanceSection from "@/app/merchants/components/BalanceSection";
import BasicInfoSection from "@/app/merchants/components/BasicInfoSection";
import {MappedDataMerchantInfo} from "@/utils/types/misc";
import DocumentInfoSection from "@/app/merchants/components/DocumentInfoSection";
import useGetMerchantInfo, {
    mapDataToBasicInfo,
    mapDataToDocInfo,
    mapDataToHeaderInfo
} from "@/api/hooks/useGetMerchantInfo";
import MerchantSkeleton from "@/app/merchants/loading";
import ErrorPage from "@/app/error";
import useGetAccountBalance from "@/api/hooks/useGetAccountBalance";


interface Props {
    params: {
        id: string
    }

}


const Merchant = ({params: {id}}: Props) => {

    const {data, isLoading, error} = useGetMerchantInfo(id);

    const {data: balanceData, isLoading: isBalanceLoading, error: balanceError} = useGetAccountBalance(id);


    const mappedData: MappedDataMerchantInfo = useMemo(() => {
        if (!data) return {basicInfo: [[]], docInfo: [], headerInfo: {}};
        const basicInfo = mapDataToBasicInfo(data);
        const docInfo = mapDataToDocInfo(data)
        const headerInfo = mapDataToHeaderInfo(data)
        return {basicInfo, docInfo, headerInfo}

    }, [data]);


    if (isLoading || isBalanceLoading) return <MerchantSkeleton/>
    if (error || balanceError) return <ErrorPage onRetry={() => {
    }}/>




    return (
        <Box>
            <TitledHeader title="Merchant Information"/>
            <Flex direction="column">
                <Flex justify="between" align="center" className="py-6 px-14 bg-grey-850 border-b">
                    <AvatarSection name={mappedData.headerInfo?.businessName!} email={mappedData.headerInfo?.email!}/>
                    <BalanceSection balance={balanceData?.actualBalance!}/>
                </Flex>
                <Box className="py-6 px-14">
                    <BasicInfoSection data={mappedData.basicInfo!}/>
                </Box>
                <Box className="mb-8 py-6 px-14 ">
                    <DocumentInfoSection data={mappedData.docInfo!}/>
                </Box>
            </Flex>
        </Box>
    );
};

export default Merchant;