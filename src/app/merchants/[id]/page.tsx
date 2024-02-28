'use client'
import React from 'react';
import {useParams} from "next/navigation";
import MerchantCreationPage from "@/app/merchants/components/MerchantCreationPage";
import MerchantInformationPage from "@/app/merchants/components/MerchantInformationPage";

const Page = () => {
    const params = useParams<{ id: string }>()
    const id = params.id

    const showContent = () => {
        if (id === 'register') return <MerchantCreationPage/>
        else return <MerchantInformationPage id={id}/>

    }
    return (
        <>
            {showContent()}
        </>
    );
};

export default Page;