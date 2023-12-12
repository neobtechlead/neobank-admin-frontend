import React from 'react';
import Ellipse from "@/app/merchants/components/Ellipse";


interface Props {
    title: string,
    description: string,
    currentStep: number,
    value: number

}

const MerchantFormHeaderItem = ({title, value, currentStep, description}: Props) => {
    return (
        <div className="flex items-center gap-5 p-4 ">
            <Ellipse currentStep={currentStep} value={value}/>
            <div
                className={`flex flex-col gap-1 items-start  ${currentStep === value ? "text-darkPurple-900" : "text-grey-500"} `}>
                <span className={`text-xs font-bold `}>{title}</span>
                <span className={`text-xs `}>{description}</span>
            </div>
        </div>
    );
};

export default MerchantFormHeaderItem;