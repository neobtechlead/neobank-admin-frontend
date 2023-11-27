import React from 'react';
import {Box, Text} from "@radix-ui/themes";

interface Props {
    offset: number,
    totalElements: number,
    numberOfElements: number
}

const PaginationPageRange = ({offset, totalElements, numberOfElements}: Props) => {
    return (
        <Box className="space-x-2 text-sm">
            {/* Display current page range and total elements */}
            <Text className="font-black">{`${offset! + 1}-${(offset! + numberOfElements!)}`}</Text>
            <Text className="text-grey-800 font-bold">of {totalElements}</Text>
        </Box>
    );
};

export default PaginationPageRange;