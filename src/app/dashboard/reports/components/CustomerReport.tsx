import React from 'react';
import {Box, Flex} from "@radix-ui/themes";
import MerchantReportHeader from "@/app/dashboard/reports/components/MerchantReportHeader";
import SearchInput from "@/components/SearchInput";
import MerchantReportTable from "@/app/dashboard/reports/components/MerchantReportTable";
import CustomerReportHeader from "@/app/dashboard/reports/components/CustomerReportHeader";
import {ITable} from "@/utils/types/table";
import CustomerReportTable from "@/app/dashboard/reports/components/CustomerReportTable";

interface Props {
    data: ITable
}

const CustomerReport = ({data}: Props) => {
    return (
        <Flex direction="column" gap="6">
            <CustomerReportHeader/>
            <Flex justify="end">
                <SearchInput onChange={(value) => console.log(value)}/>
            </Flex>
            <CustomerReportTable data={data}/>
        </Flex>
    );
};

export default CustomerReport;