import React from 'react';
import {Box, Flex} from "@radix-ui/themes";
import MerchantReportHeader from "@/app/dashboard/reports/components/MerchantReportHeader";
import SearchInput from "@/components/SearchInput";
import MerchantReportTable from "@/app/dashboard/reports/components/MerchantReportTable";
import {ITable} from "@/utils/types/table";

interface Props {

    data: ITable

}

const MerchantReport = ({data}: Props) => {
    return (
        <Flex direction="column" gap="6">
            <MerchantReportHeader/>
            <Flex justify="end">
                <SearchInput onChange={(value) => console.log(value)}/>
            </Flex>
            <MerchantReportTable data={data}/>
        </Flex>
    );
};

export default MerchantReport;