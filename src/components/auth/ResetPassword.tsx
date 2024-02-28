'use client'
import React from 'react';
import ForgotPasswordContainer from "@/components/auth/ForgotPasswordContainer";
import {Box, Heading} from "@radix-ui/themes";
import SimpleButton from "@/components/SimpleButton";
import PasswordInputWithLabel from "@/components/forms/PasswordInputWithLabel";
import {FormProvider} from "react-hook-form";
import useResetPasswordForm from "@/api/hooks/formHooks/useResetPasswordForm";
import {extractErrorMessage} from "@/utils/functions";
import {useSearchParams} from "next/navigation";
import ResetPasswordSuccess from "@/components/auth/ResetPasswordSuccess";


const ResetPassword = () => {

    const searchParams = useSearchParams()
    const token = searchParams.get("token")

    const {methods, onSubmit, isPending, isSuccess} = useResetPasswordForm(token as string)
    const {handleSubmit, register, formState: {isValid, isDirty, isSubmitting, errors, dirtyFields}} = methods
    return (

        <ForgotPasswordContainer>
            <Heading className=" text-center py-2">Reset Password</Heading>
            {isSuccess ? <ResetPasswordSuccess/> : <Box className="p-8">
                <Box className="mt-5">
                    <FormProvider {...methods}>
                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <Box className="my-5">
                                <PasswordInputWithLabel
                                    label="Password"
                                    name="password"
                                    isDirty={dirtyFields.password}
                                    error={extractErrorMessage("password", errors)}
                                    placeholder="New password"
                                    register={register}
                                    overrideClassName="!py-4"
                                    extraLabelClassName="!text-[14px]"
                                />
                            </Box>
                            <Box className="my-5">
                                <PasswordInputWithLabel
                                    label="Confirm Password"
                                    name="confirmPassword"
                                    isDirty={dirtyFields.confirmPassword}
                                    error={extractErrorMessage("confirmPassword", errors)}
                                    placeholder="Confirm password"
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
                                    overrideClassName="!w-full !py-4 !font-semibold"
                                >
                                    Create password
                                </SimpleButton>
                            </Box>
                        </form>
                    </FormProvider>
                </Box>
            </Box>}
        </ForgotPasswordContainer>

    );
};

export default ResetPassword;