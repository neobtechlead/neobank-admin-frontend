import {z} from "zod"

export const MerchantModificationSchema = z.object({
    businessName: z.string().min(2, "business name is required"),
    email: z.string().min(3, "Email is required").email("email is invalid"),
    balance: z.number().min(0)
})


export const MerchantCreationFormOneSchema = z.object({
    businessName: z.string().trim().min(2, {message: "Business name is required"}),
    tradingName: z.string().trim().min(2, {message: "Trading name is required"}),
    country: z.string().trim().min(2, {message: "Country is required"}),
    zipCode: z.string().trim(),
    firstName: z.string().trim().min(2, {message: "First Name is required"}),
    lastName: z.string().trim().min(2, {message: "Last Name is required"}),
    state: z.string().trim().min(2, {message: "Region is required"}),
    city: z.string().trim().min(2, {message: "Residential Address is required"}),
    streetAddress: z.string().trim().min(2, {message: "Street address is required"}),
    phoneNumber: z.string().trim().min(2, {message: "Phone number is required"}),
    description: z.string().trim(),
    email: z.string().min(3, {message: "Email is required"}).email({message: "Invalid email address"}),
});


export const FileSchema = z.object({
    file: z.object({
        name: z.string(),
        size: z.number().refine(size => size <= 5 * 1024 * 1024, {
            message: 'File size must be less than or equal to 5MB',
        }),
        type: z.string().refine(type => /^(image\/png|image\/jpeg|application\/pdf)$/.test(type), {
            message: 'File type must be png, jpeg, or pdf',
        }),
    }),
});


const NationalIdRequestSchema = z.object({
    idType: z.string(),
    photo: z
        .object({
            name: z.string(),
            size: z.number(),
            type: z.string(),
        })
        .refine((value) => value?.type && value.type.includes('image/') && value.size <= 1048576, {
            message: 'Invalid file type or size for photo',
        }),
});

export const MerchantCreationFormTwoSchema = z.object({
    certificateOfRegistration: NationalIdRequestSchema,
    certificateOfIncorporation: NationalIdRequestSchema.optional(),
    taxClearanceCertificate: NationalIdRequestSchema.optional(),
    constitutionByeLaws: NationalIdRequestSchema.optional(),
    directorNationalIds: z.array(NationalIdRequestSchema).refine((value) => value.length > 0, {
        message: 'At least one director ID is required',
    }),
});


