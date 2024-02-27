'use client'
import React from 'react';
import ProfileContainer from "@/components/profile/ProfileContainer";
import {Box} from "@radix-ui/themes";
import Header from "@/app/dashboard/components/Header";
import withAuth from "@/hoc/withAuth";

const ProfilePage = () => {
    return (
        <Box>
            <Header/>
            <ProfileContainer/>
        </Box>
    );
};

export default withAuth(ProfilePage);