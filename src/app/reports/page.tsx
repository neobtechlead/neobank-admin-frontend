import React from 'react';
import {Box} from "@radix-ui/themes";
import TitledHeader from "@/components/TitledHeader";
import ReportContent from "@/app/reports/components/ReportContent";


interface Props {
    searchParams: {
        id: string
    }

}


const Page = ({searchParams: {id}}: Props) => {

    return (
        <Box>
            <TitledHeader title="Reports"/>
            <ReportContent/>
        </Box>
    );
};

export default Page;