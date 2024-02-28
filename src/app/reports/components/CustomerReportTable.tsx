import React from 'react';
import ContainerCard from "@/components/ContainerCard";
import BasicTable from "@/components/BasicTable";
import {ITable} from "@/utils/types/table";
import {Flex} from "@radix-ui/themes";
import PaginationContainer from "@/components/pagination/PaginationContainer";
import {useCustomerReportStore} from "@/stores/report/merchantReport";
import {isEmpty} from "lodash";

interface Props {
    data: ITable
}


const CustomerReportTable = ({data}: Props) => {

    const {
        pagination,
        onPageSizeChange,
        pageSizes,
        selectedPageSize,
        decrementPageNumber,
        incrementPageNumber
    } = useCustomerReportStore()

    const showPagination = () => {
        return !isEmpty(data.rows) ? <PaginationContainer
            pageSizes={pageSizes}
            selectedPageSize={selectedPageSize}
            pagination={pagination}
            pageSizeChange={onPageSizeChange}
            incrementPageNumber={incrementPageNumber}
            decrementPageNumber={decrementPageNumber}
        /> : null

    }

    return (
        <Flex direction="column" gap="4">
            <ContainerCard>
                <BasicTable data={data}/>
            </ContainerCard>
            {showPagination()}
        </Flex>
    );
};

export default CustomerReportTable;