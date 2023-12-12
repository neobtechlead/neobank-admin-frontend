import React, {useState} from 'react';
import MerchantCreationStepOne from "@/app/merchants/components/MerchantCreationStepOne";
import MerchantCreationStepTwo from "@/app/merchants/components/MerchantCreationStepTwo";
import {Box} from "@radix-ui/themes";
import MerchantFormHeader from "@/app/merchants/components/MerchantFormHeader";

const formOneFields = [
    {label: 'Business Name', name: 'businessName', type: 'input'},
    {label: 'Trading Name', name: 'tradingName', type: 'input'},
    {label: 'First Name', name: 'firstName', type: 'input'},
    {label: 'Last Name', name: 'lastName', type: 'input'},
    {label: 'Residential Address', name: 'city', type: 'input'},
    {label: 'Country', name: 'country', type: 'select'},
    {label: 'Region', name: 'state', type: 'select'},
    {label: 'Zip Code', name: 'zipCode', type: 'input'},
    {label: 'Street', name: 'streetAddress', type: 'input'},
    {label: 'Phone Number', name: 'phoneNumber', type: 'input'},
    {label: 'Email Address', name: 'email', type: 'input'},
    {label: 'Description', name: 'description', type: 'input'},
];
const formTwoFields = [
    {
        label: 'Certificate of Registration',
        name: 'certificateOfRegistration',
        required: true,
        type: 'file',
    },
    {
        label: 'Certificate of Incorporation',
        name: 'certificateOfIncorporation',
        type: 'file',
    },
    {
        label: 'Tax Clearance Certificate',
        name: 'taxClearanceCertificate',
        type: 'file',
    },
    {
        label: 'Directors National IDs',
        name: 'directorNationalIds[0].photo',
        required: true,
        type: 'file',
    },
    {
        label: 'ID (Passport, Driver’s License, National ID)',
        name: 'directorNationalIds[0].idType',
        required: true,
        type: 'select',
        defaultValue: {label: 'Passport', value: 'passport'},
        options: [
            {label: 'Passport', value: 'passport'},
            {label: 'Ghana Card', value: 'ghanaCard'}
        ]
    },
    {
        label: 'Constitutions/Bye Laws',
        name: 'constitutionByeLaws',
        required: false,
    },
];

const MerchantCreationForm = () => {


    const [currentStep, setCurrentStep] = useState(1)


    const showCurrentFormPage = () => currentStep === 1 ? (
        <MerchantCreationStepOne
            onNextClick={() => setCurrentStep(2)}
            data={formOneFields}
        />) : (
        <MerchantCreationStepTwo
            data={formTwoFields}
        />
    )
    return (
        <Box className="w-1/2 mx-auto bg-white mb-20">
            <Box className="my-10">
                <MerchantFormHeader
                    currentStep={currentStep}
                    onClick={(value) => setCurrentStep(value)}/>
            </Box>

            {
                showCurrentFormPage()
            }
        </Box>
    );
};

export default MerchantCreationForm;