import React from 'react';
import {Flex} from "@radix-ui/themes";
import MerchantReportHeader from "@/app/dashboard/reports/components/MerchantReportHeader";
import MerchantReportTable from "@/app/dashboard/reports/components/MerchantReportTable";
import {ITable} from "@/utils/types/table";
import SkeletonTableWithPagination from "@/components/skeleton/SkeletonTableWithPagination";

interface Props {

    data: ITable
    isLoading: boolean

}

const MerchantReport = ({data, isLoading}: Props) => {
    return (
        <Flex direction="column" gap="6">
            <MerchantReportHeader isLoading={isLoading}/>
            <Flex justify="end">
                {/*<SearchInput onChange={(value) => console.log(value)}/>*/}
            </Flex>
            {isLoading ? <SkeletonTableWithPagination columns={6} rows={6}/> : <MerchantReportTable data={data}/>}
        </Flex>
    );
};

export default MerchantReport;