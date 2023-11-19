import React from 'react';
import DashBoardCard from "@/app/dashboard/components/DashBoardCard";
import {Flex, Table, Text} from '@radix-ui/themes';
import Link from "next/link";

interface Props {
    description: string,
    href: string
}

const TableCard = ({description, href}: Props) => {
    return (
        <DashBoardCard>

            <Flex justify="between" align="center" className="border-b text-sm p-6">
                <Text className="font-bold">{description}</Text>
                <Link href={href} className="text-sm font-bold text-[#652D90] hover:underline">See All</Link>
            </Flex>
            <Table.Root>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>First Name</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Last Name</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Phone Number</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Mobile Network</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                        <Table.Cell>danilo@example.com</Table.Cell>
                        <Table.Cell>Developer</Table.Cell>
                        <Table.Cell>Developer</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                        <Table.Cell>zahra@example.com</Table.Cell>
                        <Table.Cell>Admin</Table.Cell>
                        <Table.Cell>Developer</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
                        <Table.Cell>jasper@example.com</Table.Cell>
                        <Table.Cell>Developer</Table.Cell>
                        <Table.Cell>Developer</Table.Cell>
                    </Table.Row>

                </Table.Body>
            </Table.Root>
        </DashBoardCard>
    );
};

export default TableCard;