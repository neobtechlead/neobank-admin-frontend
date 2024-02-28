import React, {useMemo} from 'react';
import {Box, Flex} from "@radix-ui/themes";
import IconWithStackedTextLabels from "@/components/IconWithStackedTextLabels";
import SimpleButton from "@/components/SimpleButton";
import useGetCustomerInfo, {mapToCustomerDetailsView} from "@/api/hooks/queries/useGetCustomerInfo";
import ErrorPage from "@/app/error";
import CustomerDetailsHeader from "@/app/customers/components/CustomerDetailsHeader";
import useCustomerPinReset from "@/api/hooks/mutations/useCustomerPinReset";
import LoadingSpinner from "@/components/LoadingSpinner";


interface Props {
    id: string
    onBalanceModify: (id: string) => void
}

const CustomerDetails = ({id, onBalanceModify}: Props) => {
    const {data, isLoading, error} = useGetCustomerInfo(id)
    const {onPinReset, isPending} = useCustomerPinReset()


    const mappedData = useMemo(() => {
        if (!data) return {info: [], issuerId: ""};
        return mapToCustomerDetailsView(data)

    }, [data]);

    if (isLoading) return <LoadingSpinner/>
    if (error) return <ErrorPage onRetry={() => {
    }}/>


    return (
        <Box className="overflow-auto h-full">
            <CustomerDetailsHeader/>
            <Box className="flex flex-col  px-8 my-4">
                <Flex direction="column" gap="3">
                    {mappedData?.info.map(item => <Box key={item.label} className="py-4">
                        <IconWithStackedTextLabels {...item} />
                    </Box>)}
                </Flex>
                <Box className="my-10">
                    <Flex direction="column" gap="5">
                        <SimpleButton
                            isLoading={isPending}
                            disabled={isPending}
                            onClick={() => onPinReset(id)}
                            type="button"
                            overrideClassName="!w-full"
                        >
                            Reset customer pin
                        </SimpleButton>

                        <SimpleButton
                            onClick={() => onBalanceModify(mappedData?.issuerId ?? "")}
                            type="button"
                            styleType="tertiary"
                            overrideClassName="!w-full"
                        >
                            Modify Customer Balance
                        </SimpleButton>
                    </Flex>

                </Box>


            </Box>

        </Box>
    );
};

export default CustomerDetails;