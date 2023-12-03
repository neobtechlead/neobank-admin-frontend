'use client'
import React, {useMemo} from 'react';
import {Box, Flex} from "@radix-ui/themes";
import TitledHeader from "@/components/TitledHeader";
import AvatarSection from "@/components/AvatarSection";
import BasicInfoSection from "@/app/users/components/BasicInfoSection";
import {MappedDataMerchantInfo} from "@/utils/types/misc";
import useGetUserInfo, {mapDataToBasicUserInfo, mapDataToHeaderUserInfo} from "@/api/hooks/useGetUserInfo";
import ErrorPage from "@/app/error";
import UserSkeleton from "@/app/users/loading";


interface Props {
    params: {
        id: string
    }

}




const User = ({params: {id}}: Props) => {

    const {data, isLoading, error} = useGetUserInfo(id)


    const mappedData: MappedDataMerchantInfo = useMemo(() => {
        if (!data) return {basicInfo: [[]], headerInfo: {}};
        const basicInfo = mapDataToBasicUserInfo(data);
        const headerInfo = mapDataToHeaderUserInfo(data)
        return {basicInfo, headerInfo}

    }, [data]);


    if (isLoading) return <UserSkeleton/>
    if (error) return <ErrorPage onRetry={() => {
    }}/>


    return (
        <Box>
            <TitledHeader title="User Information"/>
            <Flex direction="column">
                <Flex justify="between" align="center" className="py-6 px-14 bg-grey-850 border-b">
                    <AvatarSection name={mappedData.headerInfo?.name!} email={mappedData.headerInfo?.email!}/>
                </Flex>
                <Box className="py-6 px-14">
                    <BasicInfoSection data={mappedData.basicInfo!}/>
                </Box>

            </Flex>
        </Box>
    );
};

export default User;