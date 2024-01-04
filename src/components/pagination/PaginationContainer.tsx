import React from 'react';
import {Box, Flex} from "@radix-ui/themes";
import {Pagination} from "@/components/pagination/index";
import ISelect from "@/utils/types/select";
import PageInfo from "@/utils/types/paginationInfo";
import PaginationCustomSelect from "@/components/pagination/PaginationCustomSelect";

interface Props {
    pageSizes: ISelect[],
    selectedPageSize: ISelect,
    pagination: PageInfo
    pageSizeChange: (value: ISelect) => any
    incrementPageNumber: () => void
    decrementPageNumber: () => void
}

const PaginationContainer = ({
                                 pagination,
                                 selectedPageSize,
                                 pageSizes,
                                 pageSizeChange,
                                 incrementPageNumber,
                                 decrementPageNumber
                             }: Props) => {
    return (
        <Flex justify="between" align="center">
            <Box>
                <PaginationCustomSelect
                    defaultValue={selectedPageSize}
                    options={pageSizes}
                    onSelectChange={pageSizeChange}
                />
            </Box>
            <Pagination
                decrementPageNumber={decrementPageNumber}
                incrementPageNumber={incrementPageNumber}
                pagination={pagination}
            />
        </Flex>
    );
};

export default PaginationContainer;