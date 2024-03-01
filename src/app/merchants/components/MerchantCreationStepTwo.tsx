'use client'
import React, {useEffect, useState} from 'react';
import {Box} from "@radix-ui/themes";
import SimpleButton from "@/components/SimpleButton";
import {FormFields} from "@/utils/types/form";
import FormFileUploadWithLabel from "@/components/forms/FormFileUploadWithLabel";
import {FormProvider} from "react-hook-form";
import useMerchantCreationForm from "@/api/hooks/formHooks/useMerchantCreationForm";
import useFormStores from "@/stores/form/merchant";
import FormSelectWithLabel from "@/components/forms/FormSelectWithLabel";
import {useRouter} from "next/navigation";
import SuccessPopUp from "@/components/SuccessPopUp";

interface Props {
    data: FormFields[]


}

const MerchantCreationStepTwo = ({data}: Props) => {

    const router = useRouter()

    const {formOneDefaultValues} = useFormStores()
    const {methods, onSubmit, isPending, isSuccess} = useMerchantCreationForm(formOneDefaultValues)
    const {handleSubmit, formState: {isValid, isDirty, isSubmitting}} = methods

    const [isSuccessModalOpen, setSuccessModalOpen] = useState(false)

    useEffect(() => {
        if (isSuccess) setSuccessModalOpen(true)
    }, [isSuccess])


    return (
        <>
            <SuccessPopUp
                title="Merchant Created Successfully"
                btnLabel="Go to merchant dashboard"
                description="Your new merchant is successfully created! They can now begin exploring the platform."
                onClick={() => router.push("/merchants")}
                isOpen={isSuccessModalOpen}
                onRequestClose={() => setSuccessModalOpen(false)}
            />
            <FormProvider {...methods} >
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Box className="grid grid-cols-2 gap-x-12 gap-y-10">
                        {data.map((item, index) => (
                            <React.Fragment key={index}>
                                {item.type === 'file' ? (
                                    <FormFileUploadWithLabel
                                        required={item.required!}
                                        {...item}
                                    />
                                ) : item.type === 'select' ? (
                                    <FormSelectWithLabel
                                        name={item.name}
                                        defaultValue={item.defaultValue!}
                                        options={item.options!}
                                        label={item.label}
                                        required={item.required}
                                    />
                                ) : null}
                            </React.Fragment>
                        ))}
                    </Box>
                    <Box className="mt-20">
                        <SimpleButton
                            isLoading={isSubmitting || isPending}
                            disabled={!isValid || isSubmitting}
                            type="submit"
                            overrideClassName="!w-full">Create Merchant
                        </SimpleButton>
                    </Box>
                </form>

            </FormProvider>
        </>
    );
};

export default MerchantCreationStepTwo;