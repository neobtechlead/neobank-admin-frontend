import React from 'react';
import {Flex} from "@radix-ui/themes";
import CustomerReportHeader from "@/app/dashboard/reports/components/CustomerReportHeader";
import {ITable} from "@/utils/types/table";
import CustomerReportTable from "@/app/dashboard/reports/components/CustomerReportTable";
import SkeletonTableWithPagination from "@/components/skeleton/SkeletonTableWithPagination";

interface Props {
    data: ITable
    isLoading: boolean
}

const CustomerReport = ({data, isLoading}: Props) => {
    return (
        <Flex direction="column" gap="6">
            <CustomerReportHeader isLoading={isLoading}/>
            <Flex justify="end">
                {/*<SearchInput onChange={(value) => console.log(value)}/>*/}
            </Flex>
            {isLoading ? <SkeletonTableWithPagination columns={6} rows={6}/> : <CustomerReportTable data={data}/>}

        </Flex>
    );
};

export default CustomerReport;