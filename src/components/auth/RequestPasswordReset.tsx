'use client'
import React from 'react';
import {Box, Flex, Heading, Text} from "@radix-ui/themes";
import ForgotPasswordContainer from "@/components/auth/ForgotPasswordContainer";
import RequestPasswordRequestSuccess from "@/components/auth/RequestPasswordRequestSuccess";
import {FormProvider} from "react-hook-form";
import TextInputWithLabel from "@/components/forms/TextInputWithLabel";
import {extractErrorMessage} from "@/utils/functions";
import SimpleButton from "@/components/SimpleButton";
import useRequestPasswordResetForm from "@/api/hooks/formHooks/useRequestPasswordResetForm";
import NextLink from "@/components/auth/NextLink";

const RequestPasswordReset = () => {

    const {methods, onSubmit, isPending, isSuccess} = useRequestPasswordResetForm()
    const {handleSubmit, register, formState: {isValid, isDirty, isSubmitting, errors}} = methods


    return (
        <ForgotPasswordContainer>
            <Heading className=" text-center py-2">Forgot Password</Heading>
            <Box className="p-8">
                {isSuccess ? <RequestPasswordRequestSuccess/> : <Box>
                    <Text as="p" className="text-sm text-gray-700  text-center">Enter the email address you registered
                        with.
                    We'll send you a link to reset your password.</Text>
                    <Box className="mt-5">
                    <FormProvider {...methods}>
                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <Box className="my-5">
                                <TextInputWithLabel
                                    label="Email"
                                    name="email"
                                    error={extractErrorMessage("email", errors)}
                                    placeholder="enter email address"
                                    register={register}
                                    overrideClassName="!py-4"
                                    extraLabelClassName="!text-[14px]"
                                />
                            </Box>
                            <Box className="mt-8">
                                <SimpleButton
                                    disabled={!isValid || !isDirty || isSubmitting}
                                    isLoading={isPending || isSubmitting}
                                    type="submit"
                                    overrideClassName="!w-full !py-4 !font-semibold">
                                    Reset password
                                </SimpleButton>
                            </Box>
                        </form>
                    </FormProvider>
                        <Flex justify="center" align="center" className="mt-5">
                            <NextLink to="/" label="Back to login" extraClassNames="!px-5"/>
                        </Flex>
                    </Box>

                </Box>
                }
            </Box>
        </ForgotPasswordContainer>

    );
};

export default RequestPasswordReset;