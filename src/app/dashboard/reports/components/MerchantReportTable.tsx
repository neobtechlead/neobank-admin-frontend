import React from 'react';
import {ITable} from "@/utils/types/table";
import ContainerCard from "@/components/ContainerCard";
import BasicTable from "@/components/BasicTable";
import {useRouter} from "next/navigation";
import {Flex} from "@radix-ui/themes";
import PaginationContainer from "@/components/pagination/PaginationContainer";
import {useMerchantReportStore} from "@/stores/report/merchantReport";
import {isEmpty} from "lodash";

interface Props {
    data: ITable,
}

const MerchantReportTable = ({data}: Props) => {

    const router = useRouter()
    const handleRowClick = (id: string) => {
        router.push(`/reports?id=${id}`)
    }


    const {
        pagination,
        onPageSizeChange,
        pageSizes,
        selectedPageSize,
        decrementPageNumber,
        incrementPageNumber
    } = useMerchantReportStore()

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
                <BasicTable data={data} isTableRowClickable={true} onRowClick={handleRowClick}/>
            </ContainerCard>
            {showPagination()}
        </Flex>

    );
};

export default MerchantReportTable;