'use client'
import React, {useMemo} from 'react';
import {Box, Flex} from "@radix-ui/themes";
import FormSelectWithLabel from "@/components/forms/FormSelectWithLabel";
import FormDatePickerWithLabel from "@/components/forms/FormDatePickerWithLabel";
import {FormProvider, useForm} from "react-hook-form";
import SimpleButton from "@/components/SimpleButton";
import {format} from "date-fns";
import useGetMerchantsAndRoles, {mapApiDataToReportFormFields} from "@/api/hooks/queries/useGetMerchantsAndRoles";
import {FormFields} from "@/utils/types/form";

const MerchantReportHeader = () => {
    const {data, isLoading} = useGetMerchantsAndRoles()

    const methods = useForm({
        defaultValues: {
            merchant: "",
            startDate: format(new Date(), "yyyy-MM-dd"),
            endDate: format(new Date(), "yyyy-MM-dd"),
            status: ""
        }
    })

    const formFields: FormFields[] = useMemo(() => {
        return mapApiDataToReportFormFields(data, isLoading)

    }, [data]);


    return (
        <Box>
            <FormProvider {...methods}>
                <form noValidate>
                    <Flex direction="column" gap="5" className="border rounded-lg shadow-sm px-8 py-10">
                        <Flex gap="4">
                            {formFields.map(item => <Box className="flex-1">
                                {item.type === 'select' ? <FormSelectWithLabel
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
                            <SimpleButton type="reset"
                                          overrideClassName="!bg-white !text-darkPurple-900">Reset</SimpleButton>
                            <SimpleButton type="submit" overrideClassName="!px-8 !font-semibold">Apply
                                Filters</SimpleButton>

                        </Flex>
                    </Flex>
                </form>
            </FormProvider>


        </Box>
    );
};

export default MerchantReportHeader;