import React from 'react';
import {Flex} from "@radix-ui/themes";
import MerchantReportHeader from "@/app/dashboard/reports/components/MerchantReportHeader";
import SearchInput from "@/components/SearchInput";
import MerchantReportTable from "@/app/dashboard/reports/components/MerchantReportTable";
import {ITable} from "@/utils/types/table";

interface Props {

    data: ITable
    isLoading: boolean

}

const MerchantReport = ({data, isLoading}: Props) => {
    return (
        <Flex direction="column" gap="6">
            <MerchantReportHeader/>
            <Flex justify="end">
                <SearchInput onChange={(value) => console.log(value)}/>
            </Flex>
            <MerchantReportTable data={data} isLoading={isLoading}/>
        </Flex>
    );
};

export default MerchantReport;