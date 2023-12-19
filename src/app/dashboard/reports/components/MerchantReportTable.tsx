import React from 'react';
import {ITable} from "@/utils/types/table";
import ContainerCard from "@/components/ContainerCard";
import BasicTable from "@/components/BasicTable";

interface Props {
    data: ITable
}

const MerchantReportTable = ({data}: Props) => {
    return (
        <ContainerCard>
            <BasicTable data={data}/>
        </ContainerCard>
    );
};

export default MerchantReportTable;