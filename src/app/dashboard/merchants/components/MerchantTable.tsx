import React from 'react';
import {Box, Flex} from "@radix-ui/themes";
import BasicTable from "@/components/BasicTable";
import ContainerCard from "@/components/ContainerCard";
import {ITable} from "@/utils/types/table";


interface Props {
    data: ITable

}


const MerchantTable = ({data}: Props) => {
    return (
        <Box p="6">
            <Flex direction="column" gap="2">
                <ContainerCard>
                    <BasicTable data={data} isTableRowClickable={true}/>
                </ContainerCard>
            </Flex>

        </Box>
    );
};

export default MerchantTable;