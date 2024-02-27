import React from 'react';
import {Box, Flex} from "@radix-ui/themes";
import {FormProvider} from "react-hook-form";
import PasswordInputWithLabel from "@/components/forms/PasswordInputWithLabel";
import {extractErrorMessage} from "@/utils/functions";
import SimpleButton from "@/components/SimpleButton";
import useChangePasswordForm from "@/api/hooks/formHooks/useChangePasswordForm";

const ChangePasswordForm = () => {

    const {methods, onSubmit, isPending, isSuccess} = useChangePasswordForm()
    const {handleSubmit, register, formState: {isValid, isDirty, isSubmitting, errors, dirtyFields}} = methods

    return (
        <Box>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Flex direction="column" gap="5">

                        <PasswordInputWithLabel
                            label="Current Password"
                            name="currentPassword"
                            required={true}
                            placeholder="Current Password"
                            isDirty={dirtyFields.currentPassword}
                            error={extractErrorMessage("currentPassword", errors)}
                            register={register}
                            overrideClassName="!py-4 !bg-cyan-350 !border-0"
                            extraLabelClassName="!text-[14px]"
                        />

                        <PasswordInputWithLabel
                            label="Password"
                            required={true}
                            name="password"
                            placeholder="New Password"
                            isDirty={dirtyFields.password}
                            error={extractErrorMessage("password", errors)}
                            register={register}
                            overrideClassName="!py-4 !bg-cyan-350 !border-0"
                            extraLabelClassName="!text-[14px]"
                        />

                        <PasswordInputWithLabel
                            label="Confirm Password"
                            name="confirmPassword"
                            required={true}
                            placeholder="Confirm Password"
                            isDirty={dirtyFields.confirmPassword}
                            error={extractErrorMessage("confirmPassword", errors)}
                            register={register}
                            overrideClassName="!py-4 !bg-cyan-350 !border-0"
                            extraLabelClassName="!text-[14px]"
                        />

                        <Box className="mt-8 bg ">
                            <SimpleButton
                                disabled={!isValid || !isDirty || isSubmitting}
                                isLoading={isPending || isSubmitting}
                                type="submit"
                                overrideClassName="!w-full !py-4 !font-semibold"
                            >
                                Save Changes
                            </SimpleButton>
                        </Box>
                    </Flex>
                </form>
            </FormProvider>

        </Box>
    );
};

export default ChangePasswordForm;