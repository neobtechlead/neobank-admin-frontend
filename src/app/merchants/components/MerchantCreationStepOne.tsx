import React, {useEffect} from 'react';
import {Box} from '@radix-ui/themes';
import TextInputWithLabel from '@/components/forms/TextInputWithLabel';
import {FormProvider, useForm} from 'react-hook-form';
import SimpleButton from "@/components/SimpleButton";
import {FormFields, MerchantCreationFormOneValues} from "@/utils/types/form";
import {zodResolver} from "@hookform/resolvers/zod";
import {MerchantCreationFormOneSchema} from "@/utils/validations/schema/merchants";
import CountrySelect from "@/components/forms/CountrySelect";
import RegionSelect from "@/components/forms/RegionSelect";
import useFormStores from "@/stores/form/merchant";
import {extractErrorMessage} from "@/utils/functions";


interface Props {
    data: FormFields[],
    onNextClick: () => void,
}


const MerchantCreationStepOne = ({data, onNextClick}: Props) => {

    const {formOneDefaultValues, updateFormOneDefaultValues, updateStepOneFormValid} = useFormStores()

    const methods = useForm<MerchantCreationFormOneValues>({
        defaultValues: formOneDefaultValues,
        resolver: zodResolver(MerchantCreationFormOneSchema),
        mode: "onBlur" || "onSubmit",
    });

    const {register, trigger, handleSubmit, getValues, formState: {errors, isSubmitting, isDirty, isValid}} = methods


    useEffect(() => {
        if (!isValid) updateStepOneFormValid(false)
    }, [isValid])




    const onSubmit = (values: MerchantCreationFormOneValues) => {
        updateFormOneDefaultValues(values)
        updateStepOneFormValid(true)
        onNextClick()

    }
    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Box className="grid grid-cols-2 gap-x-14 gap-y-5">
                    {data.map((item, index) => (
                        <React.Fragment key={index}>
                            {item.type === 'input' ? (
                                <TextInputWithLabel
                                    error={extractErrorMessage(item.name, errors)}
                                    label={item.label}
                                    name={item.name}
                                    register={register}
                                    overrideClassName="!py-3"
                                />
                            ) : item.type === 'select' && item.name === 'country' ? (
                                <CountrySelect name={item.name} label={item.label}/>
                            ) : item.type === 'select' && item.name === 'state' ? (
                                <RegionSelect name={item.name} label={item.label}/>
                            ) : null}
                        </React.Fragment>
                    ))}
                </Box>
                <Box className="mt-20">
                    <SimpleButton disabled={!isValid || !isDirty || isSubmitting} type="submit"
                                  overrideClassName="!w-full">Next</SimpleButton>
                </Box>
            </form>
        </FormProvider>
    );
};

export default MerchantCreationStepOne;
