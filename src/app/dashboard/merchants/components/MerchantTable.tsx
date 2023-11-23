'use client'
import React from 'react';
import BasicTable from "@/components/BasicTable";
import ContainerCard from "@/components/ContainerCard";
import {ITable} from "@/utils/types/table";
import {useRouter} from "next/navigation";


interface Props {
    data: ITable

}


const MerchantTable = ({data}: Props) => {

    const router = useRouter()

    const handleRowClick = (id: string) => {
        router.push(`/merchants/${id}`)

    }

    return (
                <ContainerCard>
                    <BasicTable data={data} isTableRowClickable={true} onRowClick={handleRowClick}/>
                </ContainerCard>
    );
};

export default MerchantTable;