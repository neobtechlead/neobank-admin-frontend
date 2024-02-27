'use client'
import React from 'react';
import {Box} from "@radix-ui/themes";
import ReportContent from "@/app/reports/components/ReportContent";
import withAuth from "@/hoc/withAuth";


const Page = () => {
    return (
        <Box>
            <ReportContent/>
        </Box>
    );
};

export default withAuth(Page);