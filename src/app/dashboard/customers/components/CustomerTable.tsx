import React from 'react';
import ContainerCard from "@/components/ContainerCard";
import BasicTable from "@/components/BasicTable";
import {ITable} from "@/utils/types/table";


interface Props {
    data: ITable,
    onRowClick: (id: string) => void

}

const CustomerTable = ({data, onRowClick}: Props) => {


    return (
        <ContainerCard>
            <BasicTable data={data} isTableRowClickable={true} onRowClick={onRowClick}/>
        </ContainerCard>
    );
};

export default CustomerTable;