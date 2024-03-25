import {z} from "zod";
import {MerchantCreationFormOneSchema, MerchantCreationFormTwoSchema} from "@/utils/validations/schema/merchants";
import {UserCreationFormSchema} from "@/utils/validations/schema/users";

export interface MerchantFormValues {
    businessName?: string
    email?: string,
    balance?: number
    accountName?: string

}

export interface UserFormValues {
    firstName?: string
    lastName?: string
    email?: string,

}

export interface FormFields {
    label: string
    required?: boolean
    name: string,
    defaultValue?: { label: string, value: string },
    options?: { label: string, value: string }[]
    type?: string,
    multiple?: boolean
}

export type MerchantCreationFormOneValues = z.input<typeof MerchantCreationFormOneSchema>


export type MerchantCreationFormTwoValues = z.input<typeof MerchantCreationFormTwoSchema>

interface DirectorNationalId {
    photo: File;
    idType: String;
}

export interface MerchantCreationFormValues {
    businessName: string;
    tradingName: string;
    country: string;
    zipCode: string;
    state: string;
    firstName: string;
    lastName: string;
    city: string;
    streetAddress: string;
    phoneNumber: string;
    description: string;
    email: string;
    certificateOfRegistration: File;
    certificateOfIncorporation: File;
    taxClearanceCertificate: File;
    directorNationalIds: DirectorNationalId[];
    constitutionByeLaws: File;
}

export type UserCreationFormValues = z.input<typeof UserCreationFormSchema>


export interface CustomerBalanceValues {
    newBalance: number
}




