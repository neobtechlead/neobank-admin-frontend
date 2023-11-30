import React from 'react';
import {useRouter} from "next/navigation";
import ContainerCard from "@/components/ContainerCard";
import BasicTable from "@/components/BasicTable";
import {ITable} from "@/utils/types/table";


interface Props {
    data: ITable

}

const UserTable = ({data}: Props) => {
    const router = useRouter()

    const handleRowClick = (id: string) => {
        router.push(`/users/${id}`)

    }

    return (
        <ContainerCard>
            <BasicTable data={data} isTableRowClickable={true} onRowClick={handleRowClick}/>
        </ContainerCard>
    );
};

export default UserTable;