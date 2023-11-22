'use client'
import React from 'react';
import {Table} from "@radix-ui/themes";
import {ITable} from "@/utils/types/table";

interface Props {
    data: ITable,
    isTableRowClickable?: boolean,
    onRowClick?: (param: any) => void
}

const BasicTable = ({data, isTableRowClickable = false, onRowClick}: Props) => {


    const renderTableHeader = () => (
        <Table.Header>
            <Table.Row>
                {data.columns.map((column) => (
                    <Table.ColumnHeaderCell key={column.key}>{column.label}</Table.ColumnHeaderCell>
                ))}
            </Table.Row>
        </Table.Header>
    );


    const renderTableBody = () => (
        <Table.Body>
            {data.rows.map((row, rowIndex) => (
                <Table.Row
                    key={rowIndex}
                    onClick={isTableRowClickable && onRowClick ? () => onRowClick(row.id || row.externalId) : undefined}
                    className={`hover:bg-gray-100 transition-all duration-300 ease-in-out ${
                        isTableRowClickable ? 'hover:cursor-pointer' : ''
                    }`}
                >
                    {data.columns.map((column) => (
                        <Table.Cell key={column.key}>{row[column.key]}</Table.Cell>
                    ))}
                </Table.Row>
            ))}
        </Table.Body>
    );

    return (
        <Table.Root>
            {renderTableHeader()}
            {renderTableBody()}
        </Table.Root>
    );
};

export default BasicTable;