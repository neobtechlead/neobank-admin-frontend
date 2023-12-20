import React from 'react';
import {ITable} from "@/utils/types/table";
import ContainerCard from "@/components/ContainerCard";
import BasicTable from "@/components/BasicTable";
import {useRouter} from "next/navigation";

interface Props {
    data: ITable
}

const MerchantReportTable = ({data}: Props) => {

    const router = useRouter()
    const handleRowClick = (id: string) => {
        router.push(`/reports?id=${id}`)
    }

    return (
        <ContainerCard>
            <BasicTable data={data} isTableRowClickable={true} onRowClick={handleRowClick}/>
        </ContainerCard>
    );
};

export default MerchantReportTable;