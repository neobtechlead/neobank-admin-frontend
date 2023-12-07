'use client'
import React from 'react';
import {Box, Text} from "@radix-ui/themes";
import TextInputWithLabel from "@/components/forms/TextInputWithLabel";
import TextInputWithLabelSlot from "@/components/forms/TextInputWithLabelSlot";
import SimpleButton from "@/components/SimpleButton";
import ModalCloseBtn from "@/components/ModalCloseBtn";
import {MerchantFormValues} from "@/utils/types/form";
import useMerchantUpdateForm from "@/api/hooks/formHooks/useMerchantUpdateForm";


interface Props {
    merchantId: string;
    onModalClose: () => void,
    defaultValues: MerchantFormValues

}


const MerchantModificationForm = ({onModalClose, defaultValues, merchantId}: Props) => {

    const {
        onSubmit,
        handleSubmit,
        register,
        isPending,
        isDirty,
        isSubmitting,
        isValid,
        errors
    } = useMerchantUpdateForm(defaultValues, merchantId)


    return (
        <form noValidate={true} onSubmit={handleSubmit(onSubmit)}>
            <Box className="relative ">
                <ModalCloseBtn onClick={onModalClose}/>
                <Box className="px-4 pt-8">
                    <Text as="p" className="font-bold text-center mb-10 mt-4">Merchant Information</Text>
                    <Box className="flex flex-col gap-7 px-2">
                        <TextInputWithLabel name="businessName" label="Merchant Name"
                                            error={errors.businessName?.message} register={register}/>
                        <TextInputWithLabel name="email" label="Merchant Email" error={errors.email?.message}
                                            register={register}/>
                        <TextInputWithLabelSlot label="Merchant Balance" error={errors.balance?.message} name="balance"
                                                register={register}/>
                        <SimpleButton
                            isLoading={isSubmitting || isPending}
                            disabled={!isDirty || !isValid || isSubmitting}
                            type='submit'
                            overrideClassName="!py-2 !mt-2 !font-bold">Save</SimpleButton>
                    </Box>
                </Box>


            </Box>
        </form>
    );
};

export default MerchantModificationForm;