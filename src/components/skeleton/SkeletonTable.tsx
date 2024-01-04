import React from 'react';
import {Table} from "@radix-ui/themes";
import Skeleton from "@/components/skeleton/Skeleton";
import {generateArray} from "@/utils/functions";

interface Props {
    columns: number
    rows: number

}

const SkeletonTable = ({columns, rows}: Props) => {
    const columnArray = generateArray(columns)
    const rowsArray = generateArray(rows)
    return (
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    {columnArray.map((column) => (
                        <Table.ColumnHeaderCell key={column}><Skeleton/></Table.ColumnHeaderCell>
                    ))}
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {rowsArray.map((row) => (
                    <Table.Row
                        key={row}
                    >
                        {columnArray.map((column) => (
                            <Table.Cell key={column}><Skeleton/></Table.Cell>
                        ))}
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    );
};

export default SkeletonTable;