'use client'
import React, {useEffect, useMemo, useState} from 'react';
import {FormProvider} from "react-hook-form";
import {Box} from "@radix-ui/themes";
import TextInputWithLabel from "@/components/forms/TextInputWithLabel";
import {extractErrorMessage} from "@/utils/functions";
import SimpleButton from "@/components/SimpleButton";
import useUserCreationForm from "@/api/hooks/formHooks/useUserCreationForm";
import FormDatePickerWithLabel from "@/components/forms/FormDatePickerWithLabel";
import FormSelectWithLabel from "@/components/forms/FormSelectWithLabel";
import {FormFields} from "@/utils/types/form";
import useGetMerchantsAndRoles, {mapApiDataToFormFields} from "@/api/hooks/queries/useGetMerchantsAndRoles";
import SuccessPopUp from "@/components/SuccessPopUp";
import {useRouter} from "next/navigation";


const UserCreationForm = () => {

    const router = useRouter()

    const {data, isLoading,} = useGetMerchantsAndRoles()

    const {methods, onSubmit, isPending, isSuccess} = useUserCreationForm()
    const {handleSubmit, register, formState: {isValid, isDirty, isSubmitting, errors}} = methods

    const formFields: FormFields[] = useMemo(() => {
        return mapApiDataToFormFields(data, isLoading)

    }, [data]);

    const [isSuccessModalOpen, setSuccessModalOpen] = useState(false)

    useEffect(() => {
        if (isSuccess) setSuccessModalOpen(true)
    }, [isSuccess])


    return (

        <>
            <SuccessPopUp
                title="User Created Successfully"
                btnLabel="Go to user dashboard"
                description="Your new user is successfully created! They can now begin exploring the platform."
                onClick={() => router.push("/dashboard/users")}
                isOpen={isSuccessModalOpen}
                onRequestClose={() => setSuccessModalOpen(false)}
            />
            <Box className="w-1/2 mx-auto bg-white mb-20">
                <Box className="mt-10">
                    <FormProvider {...methods}>
                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <Box className="grid grid-cols-2 gap-x-14 gap-y-5">
                                {formFields.map((item, index) => (
                                    <React.Fragment key={index}>
                                        {item.type === 'input' ? (
                                            <TextInputWithLabel
                                                required={item.required}
                                                error={extractErrorMessage(item.name, errors)}
                                                label={item.label}
                                                name={item.name}
                                                register={register}
                                                overrideClassName="!py-3"
                                            />
                                        ) : item.type === 'date' ? (
                                            <FormDatePickerWithLabel name={item.name} label={item.label}
                                                                     required={item.required}/>
                                        ) : item.type === 'select' ? (
                                            <FormSelectWithLabel name={item.name}
                                                                 required={item.required}
                                                                 isLoading={isLoading}
                                                                 defaultValue={item.defaultValue!}
                                                                 options={item.options!}
                                                                 label={item.label}/>
                                        ) : null}
                                    </React.Fragment>
                                ))}
                            </Box>
                            <Box className="mt-20">
                                <SimpleButton disabled={!isValid || !isDirty || isSubmitting}
                                              isLoading={isPending || isSubmitting}
                                              type="submit"
                                              overrideClassName="!w-full">
                                    Create User
                                </SimpleButton>
                            </Box>
                        </form>
                    </FormProvider>
                </Box>
            </Box>
        </>

    );
};

export default UserCreationForm;