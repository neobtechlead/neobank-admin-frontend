'use client'
import React from 'react';
import {Box} from "@radix-ui/themes";
import TitledHeader from "@/components/TitledHeader";
import MerchantCreationForm from "@/app/merchants/components/MerchantCreationForm";


const MerchantPage = () => {

    return (
        <Box>
            <TitledHeader title="Merchant Creation"/>
            <MerchantCreationForm/>

        </Box>


    );
};

export default MerchantPage;
