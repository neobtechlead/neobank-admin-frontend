import React, {useMemo} from 'react';
import {Box, Flex, Heading, Text} from "@radix-ui/themes";
import IconWithStackedTextLabels from "@/components/IconWithStackedTextLabels";
import SimpleButton from "@/components/SimpleButton";
import useGetCustomerInfo, {mapToCustomerDetailsView} from "@/api/hooks/useGetCustomerInfo";
import ErrorPage from "@/app/error";
import CustomerDetailsHeader from "@/app/dashboard/customers/components/CustomerDetailsHeader";


interface Props {
    id: string
}

const CustomerDetails = ({id}: Props) => {
    const {data, isLoading, error} = useGetCustomerInfo(id)


    const mappedData = useMemo(() => {
        if (!data) return [];
        return mapToCustomerDetailsView(data)

    }, [data]);

    if (isLoading) return <Box>Loading</Box>
    if (error) return <ErrorPage onRetry={() => {
    }}/>


    return (
        <Box className="overflow-auto h-full">
            <CustomerDetailsHeader/>
            <Box className="flex flex-col  px-8 my-4">
                <Flex direction="column" gap="3">
                    {mappedData.map(item => <Box key={item.label} className="py-4">
                        <IconWithStackedTextLabels {...item} />
                    </Box>)}
                </Flex>
                <Box className="my-10">
                    <SimpleButton
                        onClick={() => {
                        }}
                        type="button"
                        overrideClassName="!w-full"
                    >
                        Reset customer pin
                    </SimpleButton>
                </Box>


            </Box>

        </Box>
    );
};

export default CustomerDetails;