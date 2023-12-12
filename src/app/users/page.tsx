'use client'
import React from 'react';
import {Box} from "@radix-ui/themes";
import TitledHeader from "@/components/TitledHeader";
import UserCreationForm from "@/app/users/components/UserCreationForm";


const UserPage = () => {
    return (
        <Box>
            <TitledHeader title="User Creation"/>
            <UserCreationForm/>

        </Box>


    );
};

export default UserPage;
