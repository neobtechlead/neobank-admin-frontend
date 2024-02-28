import React from 'react';
import {Box, Text} from "@radix-ui/themes";
import ModalCloseBtn from "@/components/ModalCloseBtn";
import TextInputWithLabelSlot from "@/components/forms/TextInputWithLabelSlot";
import SimpleButton from "@/components/SimpleButton";
import useCustomerBalanceUpdate from "@/api/hooks/mutations/useCustomerBalanceUpdate";
import CurrentBalanceInput from "@/app/customers/components/CurrentBalanceInput";
import useCustomerAccountBalance from "@/api/hooks/queries/useCustomerAccountBalance";
import {isEmpty} from "lodash";
import LoadingSpinner from "@/components/LoadingSpinner";
import {extractErrorMessage, formatCurrency} from "@/utils/functions";
import {CEDIS_CONVERTER} from "@/utils/constants";

interface Props {
    onModalClose: () => void,

}

const CustomerBalanceAdjustmentForm = ({onModalClose}: Props) => {
    const {data, isLoading} = useCustomerAccountBalance()
    const {
        onSubmit,
        handleSubmit,
        register,
        isPending,
        isDirty,
        isSubmitting,
        isValid,
        errors
    } = useCustomerBalanceUpdate()

    if (isLoading) return <LoadingSpinner/>

    const getCurrentBalance = () => {
        return !isEmpty(data) && data.availableBalance ? parseInt(data.availableBalance) : 0
    }


    return (
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Box className="relative ">
                <ModalCloseBtn onClick={onModalClose}/>
                <Box className="px-4 pt-8">
                    <Text as="p" className="font-bold text-center mb-10 mt-4">Modify Customer Balance</Text>
                    <Box className="flex flex-col gap-7 px-2">
                        <CurrentBalanceInput
                            label="Current Customer Balance"
                            name="currentBalance"
                            value={formatCurrency(getCurrentBalance() * CEDIS_CONVERTER)}
                        />

                        <TextInputWithLabelSlot
                            label="New Customer Balance"
                            name="newBalance"
                            error={extractErrorMessage("newBalance", errors)}
                            register={register}
                        />
                        <SimpleButton
                            isLoading={isSubmitting || isPending}
                            disabled={!isDirty || !isValid || isSubmitting}
                            type='submit'
                            overrideClassName="!py-2 !mt-2 !font-bold"
                        >
                            Save
                        </SimpleButton>
                    </Box>
                </Box>

            </Box>
        </form>
    );
};

export default CustomerBalanceAdjustmentForm;