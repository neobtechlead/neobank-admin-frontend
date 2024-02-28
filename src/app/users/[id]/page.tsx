'use client'
import React from 'react';
import {useParams} from "next/navigation";
import UserCreationPage from "@/app/users/components/UserCreationPage";
import UserInformationPage from "@/app/users/components/UserInformationPage";

const Page = () => {

    const params = useParams<{ id: string }>()
    const id = params.id

    const showContent = () => {
        if (id === 'register') return <UserCreationPage/>
        else return <UserInformationPage id={id}/>

    }
    return (
        <>
            {showContent()}
        </>
    );
};

export default Page;