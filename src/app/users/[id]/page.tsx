'use client'
import React, {useMemo, useState} from 'react';
import {Box, Flex} from "@radix-ui/themes";
import TitledHeader from "@/components/TitledHeader";
import AvatarSection from "@/components/AvatarSection";
import {MappedDataMerchantInfo} from "@/utils/types/misc";
import useGetUserInfo, {mapDataToBasicUserInfo, mapDataToHeaderUserInfo} from "@/api/hooks/queries/useGetUserInfo";
import ErrorPage from "@/app/error";
import UserSkeleton from "@/app/users/loading";
import BasicInfoSection from "@/components/BasicInfoSection";
import ModalDialog from "@/components/ModalDialog";
import UserModificationForm from "@/app/users/components/UserModificationForm";
import withAuth from "@/hoc/withAuth";


interface Props {
    params: {
        id: string
    }

}




const User = ({params: {id}}: Props) => {

    const [isEditModalOpen, setEditModalOpen] = useState(false)
    const handleEditClick = () => setEditModalOpen(true)

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
        <>
            <ModalDialog
                isOpen={isEditModalOpen}
                onRequestClose={() => setEditModalOpen(false)}
            >
                <UserModificationForm
                    userId={id}
                    onModalClose={() => setEditModalOpen(false)}
                    defaultValues={{
                        email: mappedData.headerInfo?.email,
                        name: mappedData.headerInfo?.name,
                    }}/>
            </ModalDialog>

            <Box>
                <TitledHeader title="User Information"/>
                <Flex direction="column">
                    <Flex justify="between" align="center" className="py-6 px-14 bg-grey-850 border-b">
                        <AvatarSection onEditClick={handleEditClick} name={mappedData.headerInfo?.name!}
                                       email={mappedData.headerInfo?.email!}/>
                    </Flex>
                    <Box className="py-6 px-14">
                        <BasicInfoSection columns={3} onEditClick={handleEditClick} data={mappedData.basicInfo!}/>
                    </Box>

                </Flex>
            </Box>
        </>

    );
};

export default withAuth(User);