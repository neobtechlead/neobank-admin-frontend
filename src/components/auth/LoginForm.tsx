"use client"
import React from 'react';
import {Box, Flex} from "@radix-ui/themes";
import TextInputWithLabel from "@/components/forms/TextInputWithLabel";
import {FormProvider} from "react-hook-form";
import Link from "next/link";
import SimpleButton from "@/components/SimpleButton";
import LoginHeader from "@/components/auth/LoginHeader";
import PasswordInputWithLabel from "@/components/forms/PasswordInputWithLabel";
import useLoginForm from "@/api/hooks/formHooks/useLoginForm";
import {extractErrorMessage} from "@/utils/functions";
import CheckboxInput from "@/components/forms/CheckBoxInput";


const LoginForm = () => {

    const {methods, onSubmit, isPending, isSuccess} = useLoginForm()
    const {handleSubmit, register, formState: {isValid, isDirty, isSubmitting, errors, dirtyFields}} = methods


    return (
        <Box className="my-5">
            <LoginHeader/>
            <Box className="w-[90%]">
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <Flex direction="column" gap="6">
                            <TextInputWithLabel
                                label="Email"
                                name="email"
                                error={extractErrorMessage("email", errors)}
                                placeholder="email"
                                register={register}
                                overrideClassName="!py-4"
                                extraLabelClassName="!text-[14px]"
                            />

                            <PasswordInputWithLabel
                                isDirty={dirtyFields.password}
                                label="Password"
                                error={extractErrorMessage("password", errors)}
                                name="password"
                                placeholder="password"
                                register={register}
                                overrideClassName="!py-4"
                                extraLabelClassName="!text-[14px]"
                            />
                        </Flex>

                        <Flex justify="between" align="center" className="py-3">
                            <CheckboxInput label="Remember me"/>
                            <Link href="/forgot-password" className="font-semibold text-sm text-purple-900">Forgot
                                Password?</Link>
                        </Flex>

                        <Box className="mt-5 ">
                            <SimpleButton
                                disabled={!isValid || !isDirty || isSubmitting}
                                isLoading={isPending || isSubmitting}
                                type="submit"
                                overrideClassName="!w-full !py-4 !font-semibold">
                                Sign in
                            </SimpleButton>
                        </Box>
                    </form>
                </FormProvider>
            </Box>
        </Box>
    );
};

export default LoginForm;