import React from 'react';
import {useRouter} from "next/navigation";
import ContainerCard from "@/components/ContainerCard";
import BasicTable from "@/components/BasicTable";
import {ITable} from "@/utils/types/table";


interface Props {
    data: ITable

}

const CustomerTable = ({data}: Props) => {
    const router = useRouter()

    const handleRowClick = (id: string) => {
        router.push(`/customers/${id}`)

    }

    return (
        <ContainerCard>
            <BasicTable data={data} isTableRowClickable={true} onRowClick={handleRowClick}/>
        </ContainerCard>
    );
};

export default CustomerTable;