import React from 'react';
import {Table} from "@radix-ui/themes";
import SkeletonLoader from "@/components/SkeletonLoader";

interface Props {
    columns: number[]
    rows: number[]

}

const SkeletonTable = ({columns, rows}: Props) => {
    return (
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    {columns.map((column) => (
                        <Table.ColumnHeaderCell key={column}><SkeletonLoader/></Table.ColumnHeaderCell>
                    ))}
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {rows.map((row) => (
                    <Table.Row
                        key={row}
                    >
                        {columns.map((column) => (
                            <Table.Cell key={column}><SkeletonLoader/></Table.Cell>
                        ))}
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    );
};

export default SkeletonTable;