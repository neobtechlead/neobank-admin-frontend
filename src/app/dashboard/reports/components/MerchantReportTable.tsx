import React from 'react';
import {ITable} from "@/utils/types/table";
import ContainerCard from "@/components/ContainerCard";
import BasicTable from "@/components/BasicTable";
import {useRouter} from "next/navigation";
import SkeletonTable from "@/components/skeleton/SkeletonTable";

interface Props {
    data: ITable,
    isLoading: boolean
}

const MerchantReportTable = ({data, isLoading}: Props) => {

    const router = useRouter()
    const handleRowClick = (id: string) => {
        router.push(`/reports?id=${id}`)
    }

    if (isLoading) return <SkeletonTable columns={[1, 2, 3, 4, 5]} rows={[1, 2, 3, 4, 5]}/>

    return (
        <ContainerCard>
            <BasicTable data={data} isTableRowClickable={true} onRowClick={handleRowClick}/>
        </ContainerCard>
    );
};

export default MerchantReportTable;