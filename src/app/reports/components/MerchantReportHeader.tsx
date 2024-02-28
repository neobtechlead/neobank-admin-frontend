'use client'
import React from 'react';
import {Box, Flex} from "@radix-ui/themes";
import FormDatePickerWithLabel from "@/components/forms/FormDatePickerWithLabel";
import {FormProvider} from "react-hook-form";
import SimpleButton from "@/components/SimpleButton";
import useMerchantReportFilter from "@/app/reports/hooks/useMerchantReportFilter";
import SelectWithLabel from "@/components/forms/SelectWithLabel";

interface Props {
    isLoading: boolean

}

const MerchantReportHeader = ({isLoading}: Props) => {
    const {
        methods,
        handleSubmit,
        onSubmit,
        formFields
    } = useMerchantReportFilter()

    const {formState: {isValid, isSubmitting}, reset} = methods

    return (
        <Box>
            <FormProvider {...methods}>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Flex direction="column" gap="5" className="border rounded-lg shadow-sm px-8 py-10">
                        <Flex gap="4">
                            {formFields.map(item => <Box key={item.name} className="flex-1">
                                {item.type === 'select' ? <SelectWithLabel
                                    name={item.name}
                                    label={item.label}
                                    defaultValue={item.defaultValue!}
                                    options={item.options!}
                                /> : (
                                    item.type === 'date' ? <FormDatePickerWithLabel
                                        name={item.name}
                                        label={item.label}
                                    /> : null
                                )}
                            </Box>)}


                        </Flex>
                        <Flex justify="end" gap="3">
                            <SimpleButton
                                type="reset"
                                onClick={() => reset()}
                                overrideClassName="!bg-white !text-darkPurple-900"
                            >
                                Reset
                            </SimpleButton>
                            <SimpleButton
                                type="submit"
                                disabled={!isValid || isSubmitting || isLoading}
                                overrideClassName="!px-8 !font-semibold"
                            >
                                Apply Filters
                            </SimpleButton>
                        </Flex>
                    </Flex>
                </form>
            </FormProvider>


        </Box>
    );
};

export default MerchantReportHeader;