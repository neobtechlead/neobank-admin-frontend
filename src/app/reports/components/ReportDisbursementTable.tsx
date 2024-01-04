import React from 'react';
import ContainerCard from "@/components/ContainerCard";
import BasicTable from "@/components/BasicTable";
import {ITable} from "@/utils/types/table";
import {Flex} from "@radix-ui/themes";
import PaginationContainer from "@/components/pagination/PaginationContainer";
import {useDisbursementReportStore} from "@/stores/report/merchantReport";
import SkeletonTableWithPagination from "@/components/skeleton/SkeletonTableWithPagination";

interface Props {
    data: ITable
    isLoading: boolean
}

const ReportDisbursementTable = ({data, isLoading}: Props) => {
    const {
        pagination,
        onPageSizeChange,
        pageSizes,
        selectedPageSize,
        decrementPageNumber,
        incrementPageNumber
    } = useDisbursementReportStore()

    if (isLoading) return <SkeletonTableWithPagination columns={6} rows={6}/>

    return (
        <Flex direction="column" gap="4">

            <ContainerCard>
                <BasicTable data={data}/>
            </ContainerCard>
            <PaginationContainer
                pageSizes={pageSizes}
                selectedPageSize={selectedPageSize}
                pagination={pagination}
                pageSizeChange={onPageSizeChange}
                incrementPageNumber={incrementPageNumber} decrementPageNumber={decrementPageNumber}
            />


        </Flex>
    );
};

export default ReportDisbursementTable;