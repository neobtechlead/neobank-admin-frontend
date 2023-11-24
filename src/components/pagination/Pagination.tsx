'use client'
import React from 'react';
import {Flex} from "@radix-ui/themes";
import CaretRight from "@/assets/svgs/CaretRight.svg";
import CaretLeft from "@/assets/svgs/CaretLeft.svg";
import {PaginationButton, PaginationPageRange} from "@/components/pagination";
import type {PageInfo} from "@/utils/types/misc";

interface Props {
    decrementPageNumber: () => void
    incrementPageNumber: () => void
    pagination: PageInfo
}

const Pagination = ({
                        incrementPageNumber,
                        decrementPageNumber,
                        pagination: {first, last, totalElements, offset, numberOfElements}
                    }: Props) => {

    return (
        <Flex align="center" gap="6">
            <PaginationPageRange offset={offset!} totalElements={totalElements!} numberOfElements={numberOfElements!}/>
            <Flex gap="3">
                <PaginationButton onClick={decrementPageNumber} icon={CaretLeft} disabled={first}/>
                <PaginationButton onClick={incrementPageNumber} icon={CaretRight} disabled={last}/>
            </Flex>

        </Flex>
    );
};

export default Pagination;