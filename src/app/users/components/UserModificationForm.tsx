'use client'
import React from 'react';
import {Box, Text} from "@radix-ui/themes";
import TextInputWithLabel from "@/components/forms/TextInputWithLabel";
import SimpleButton from "@/components/SimpleButton";
import ModalCloseBtn from "@/components/ModalCloseBtn";
import {UserFormValues} from "@/utils/types/form";
import useUpdateUsersForm from "@/api/hooks/formHooks/useUpdateUsersForm";


interface Props {
    userId: string;
    onModalClose: () => void,
    defaultValues: UserFormValues

}


const UserModificationForm = ({onModalClose, defaultValues, userId}: Props) => {

    const {
        onSubmit,
        handleSubmit,
        register,
        isPending,
        isDirty,
        isSubmitting,
        isValid,
        errors
    } = useUpdateUsersForm(defaultValues, userId)


    return (
        <form noValidate={true} onSubmit={handleSubmit(onSubmit)}>
            <Box className="relative ">
                <ModalCloseBtn onClick={onModalClose}/>
                <Box className="px-4 pt-8">
                    <Text as="p" className="font-bold text-center mb-10 mt-4">User Information</Text>
                    <Box className="flex flex-col gap-7 px-2">
                        <TextInputWithLabel name="name" label="Name"
                                            error={errors.name?.message} register={register}/>
                        <TextInputWithLabel name="email" label="Email" error={errors.email?.message}
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

export default UserModificationForm;