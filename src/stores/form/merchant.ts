import {create} from 'zustand'
import {MerchantCreationFormOneValues} from "@/utils/types/form";

interface IMerchantCreationStore {
    selectedCountry: string,
    updateSelectedCountry: (value: string) => void,
    formOneDefaultValues: MerchantCreationFormOneValues,
    isStepOneFormValid: boolean,
    updateStepOneFormValid: (value: boolean) => void;
    updateFormOneDefaultValues: (values: MerchantCreationFormOneValues) => void


}


const useFormStores = create<IMerchantCreationStore>()(
    (set, get) => ({
        selectedCountry: "Ghana",
        formOneDefaultValues: {
            businessName: '',
            tradingName: '',
            country: 'Ghana',
            firstName: '',
            lastName: '',
            zipCode: '',
            state: '',
            city: '',
            streetAddress: '',
            phoneNumber: '',
            description: '',
            email: '',
        },
        isStepOneFormValid: false,
        updateStepOneFormValid: (value: boolean) => set(() => ({isStepOneFormValid: value})),

        updateSelectedCountry: value => set(state => ({selectedCountry: value})),
        updateFormOneDefaultValues: (values: MerchantCreationFormOneValues) => set(() => ({formOneDefaultValues: values})),


    }),
)

export default useFormStores