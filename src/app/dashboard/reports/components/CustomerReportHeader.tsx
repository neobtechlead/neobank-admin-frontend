import React from 'react';
import {Box, Flex} from "@radix-ui/themes";
import {FormProvider} from "react-hook-form";
import FormDatePickerWithLabel from "@/components/forms/FormDatePickerWithLabel";
import SimpleButton from "@/components/SimpleButton";
import TextInputWithLabel from "@/components/forms/TextInputWithLabel";
import {TRANSACTION_STATUS, TRANSACTION_TYPES} from "@/utils/constants";
import useCustomerReportFilter from "@/app/dashboard/reports/hooks/useCustomerReportFilter";
import SelectWithLabel from "@/components/forms/SelectWithLabel";

interface Props {
    isLoading: boolean

}

const CustomerReportHeader = ({isLoading}: Props) => {


    const {methods, reset, register, handleSubmit, onSubmit} = useCustomerReportFilter()

    const {formState: {isDirty, isValid, isSubmitting}} = methods
    return (
        <Box>
            <FormProvider {...methods}>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Flex direction="column" gap="5" className="border rounded-lg shadow-sm px-8 py-10">
                        <Flex gap="4">
                            <Box className="flex-1">
                                <TextInputWithLabel
                                    placeholder="Enter Number"
                                    overrideClassName="!py-3"
                                    label="Customer Number"
                                    name="phoneNumber"
                                    register={register}/>
                            </Box>
                            <Box className="flex-1">
                                <FormDatePickerWithLabel
                                    name="startDate"
                                    label="Start Date"/>
                            </Box>
                            <Box className="flex-1">
                                <FormDatePickerWithLabel
                                    name="endDate"
                                    label="End Date"/>
                            </Box>
                            <Box className="flex-1">
                                <SelectWithLabel
                                    name="status"
                                    label="Transaction Status"
                                    defaultValue={{label: "Select Status", value: ""}}
                                    options={[{label: "Select Status", value: ""}, ...TRANSACTION_STATUS]}
                                />
                            </Box>

                            <Box className="flex-1">
                                <SelectWithLabel
                                    name="type"
                                    label="Transaction Type"
                                    defaultValue={{label: "Select Type", value: ""}}
                                    options={[{label: "Select Type", value: ""}, ...TRANSACTION_TYPES]}
                                />
                            </Box>

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

export default CustomerReportHeader;