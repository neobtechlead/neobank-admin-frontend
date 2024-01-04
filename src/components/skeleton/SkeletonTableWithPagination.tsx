import React from 'react';
import {Flex} from "@radix-ui/themes";
import SkeletonTable from "@/components/skeleton/SkeletonTable";
import SkeletonText from "@/components/skeleton/SkeletonText";

interface Props {
    columns?: number
    rows?: number

}

const SkeletonTableWithPagination = ({columns = 5, rows = 5}: Props) => {
    return (
        <Flex direction="column" gap="4">
            <SkeletonTable columns={columns} rows={rows}/>
            <Flex justify="between">
                <SkeletonText/>
                <SkeletonText/>
            </Flex>
        </Flex>
    );
};

export default SkeletonTableWithPagination;