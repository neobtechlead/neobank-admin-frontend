'use client'
import React from 'react';
import MerchantFormHeaderItem from "@/app/merchants/components/MerchantFormHeaderItem";
import useFormStores from "@/stores/form/merchant";


interface Props {
    currentStep: number,
    onClick: (value: number) => void
}


const MerchantFormHeader = ({onClick, currentStep}: Props) => {


    const {isStepOneFormValid} = useFormStores()

    return (
        <div className="flex gap-16 ">
            <button onClick={() => onClick(1)}>
                <MerchantFormHeaderItem
                    value={1}
                    title="Merchant Information"
                    description="Upload basic information"
                    currentStep={currentStep}
                />
            </button>
            <button onClick={() => onClick(2)} disabled={!isStepOneFormValid}>
                <MerchantFormHeaderItem
                    value={2}
                    title="Merchant Documents"
                    description="Upload the following required documents"
                    currentStep={currentStep}
                />
            </button>


        </div>
    );
};

export default MerchantFormHeader;