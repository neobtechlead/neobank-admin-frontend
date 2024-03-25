import React from 'react';
import ContainerCard from "@/components/ContainerCard";
import BasicTable from "@/components/BasicTable";
import {ITable} from "@/utils/types/table";


interface Props {
    data: ITable

}

const ActivityLogTable = ({data}: Props) => {

    return (
        <ContainerCard>
            <BasicTable data={data}/>
        </ContainerCard>
    );
};

export default ActivityLogTable;