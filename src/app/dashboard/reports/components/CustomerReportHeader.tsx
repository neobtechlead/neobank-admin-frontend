import React from 'react';
import {Box, Flex} from "@radix-ui/themes";
import {FormProvider, useForm} from "react-hook-form";
import FormSelectWithLabel from "@/components/forms/FormSelectWithLabel";
import FormDatePickerWithLabel from "@/components/forms/FormDatePickerWithLabel";
import SimpleButton from "@/components/SimpleButton";
import TextInputWithLabel from "@/components/forms/TextInputWithLabel";
import useGetMerchantsAndRoles from "@/api/hooks/queries/useGetMerchantsAndRoles";
import {format} from "date-fns"

const CustomerReportHeader = () => {


    const methods = useForm()

    const {register} = methods

    return (
        <Box>
            <FormProvider {...methods}>
                <form noValidate>
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
                                <FormSelectWithLabel
                                    name="status"
                                    label="Transaction Status"
                                    defaultValue={{label: "completed", value: "completed"}}
                                    options={[{label: "completed", value: "completed"}]}
                                />
                            </Box>

                            <Box className="flex-1">
                                <FormSelectWithLabel
                                    name="type"
                                    label="Transaction Type"
                                    defaultValue={{label: "DISBURSEMENT", value: "DISBURSEMENT"}}
                                    options={[{label: "COLLECTION", value: "COLLECTION"}, {
                                        label: "DISBURSEMENT",
                                        value: "DISBURSEMENT"
                                    }]}
                                />
                            </Box>

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

export default CustomerReportHeader;