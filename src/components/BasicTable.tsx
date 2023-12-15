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
            <Table.Row align="center" className="bg-neutral-100">
                {data.columns.map((column, columnIndex) => (
                    <Table.ColumnHeaderCell
                        justify="center"
                        key={column.key}>{column.label}</Table.ColumnHeaderCell>
                ))}
            </Table.Row>
        </Table.Header>
    );


    const renderTableBody = () => (
        <Table.Body>
            {data.rows.map((row, rowIndex) => (
                <Table.Row align="center"
                    key={rowIndex}
                    onClick={isTableRowClickable && onRowClick ? () => onRowClick(row.id || row.externalId) : undefined}
                    className={`hover:bg-gray-100 transition-all duration-300 ease-in-out ${
                        isTableRowClickable ? 'hover:cursor-pointer' : ''
                    }`}
                >
                    {data.columns.map((column, columnIndex) => (
                        <Table.Cell className="lowercase first-letter:uppercase" justify="center"
                                    key={column.key}>{row[column.key]}</Table.Cell>
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