import React from 'react';
import {Box, Text} from "@radix-ui/themes";
import ModalCloseBtn from "@/components/ModalCloseBtn";
import TextInputWithLabelSlot from "@/components/forms/TextInputWithLabelSlot";
import SimpleButton from "@/components/SimpleButton";
import useCustomerBalanceUpdate from "@/api/hooks/mutations/useCustomerBalanceUpdate";
import {CustomerBalanceValues} from "@/utils/types/form";

interface Props {
    customerId: string;
    defaultValues: CustomerBalanceValues
    onModalClose: () => void,

}

const CustomerBalanceAdjustmentForm = ({onModalClose, defaultValues, customerId}: Props) => {

    const {
        onSubmit,
        handleSubmit,
        register,
        isPending,
        isDirty,
        isSubmitting,
        isValid,
        errors
    } = useCustomerBalanceUpdate(customerId, defaultValues)

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Box className="relative ">
                <ModalCloseBtn onClick={onModalClose}/>
                <Box className="px-4 pt-8">
                    <Text as="p" className="font-bold text-center mb-10 mt-4">Modify Customer Balance</Text>
                    <Box className="flex flex-col gap-7 px-2">
                        <TextInputWithLabelSlot
                            label="Current Customer Balance"
                            name="currentBalance"
                            disabled={true}
                            register={register}
                            error={errors.currentBalance?.message}
                        />

                        <TextInputWithLabelSlot
                            label="New Customer Balance"
                            name="newBalance"
                            error={errors.newBalance?.message}
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