import React from 'react';
import {Box} from "@radix-ui/themes";
import ReportContent from "@/app/reports/components/ReportContent";


interface Props {
    searchParams: {
        id: string
    }

}


const Page = ({searchParams: {id}}: Props) => {

    return (
        <Box>
            <ReportContent id={id}/>
        </Box>
    );
};

export default Page;