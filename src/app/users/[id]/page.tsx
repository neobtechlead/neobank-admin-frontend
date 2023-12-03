'use client'
import React from 'react';
import {Box, Flex} from "@radix-ui/themes";
import TitledHeader from "@/components/TitledHeader";
import AvatarSection from "@/components/AvatarSection";
import BalanceSection from "@/app/merchants/components/BalanceSection";
import BasicInfoSection from "@/app/merchants/components/BasicInfoSection";
import {BasicInfoItem} from "@/utils/types/misc";


interface Props {
    params: {
        id: string
    }

}


const basicInfo: BasicInfoItem[][] = [
    [{
        label: "Trading Name",
        value: "Complete Farmer"
    },
        {
            label: "Residential Address",
            value: "Airport-west, Accra-Ghana"
        }],
    [{
        label: "Country",
        value: "Ghana"
    },
        {
            label: "Region",
            value: "Greater Accra"
        }],
    [
        {
            label: "Zip Code",
            value: "00233"
        },
        {
            label: "Street",
            value: "Airport West",
        }],
    [
        {
            label: "Email Addresss",
            value: "Complete Farmer",
            editable: true
        },
        {
            label: "Phone Number",
            value: "+233555555555",
            editable: true
        }],

    [
        {
            label: "Description of service",
            value: "This is a test description"
        },
    ]


]


const User = ({params: {id}}: Props) => {

    return (
        <Box>
            <TitledHeader title="User Information"/>
            <Flex direction="column">
                <Flex justify="between" align="center" className="py-6 px-14">
                    <AvatarSection name="Complete Farmer" email="completefarmer@cf.com"/>
                </Flex>
                <Box className="py-6 px-14">
                    <BasicInfoSection data={basicInfo}/>
                </Box>

            </Flex>
        </Box>
    );
};

export default User;