import {z} from "zod"

export const UserModificationSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().min(3, "Email is required").email("email is invalid"),
})


export const UserCreationFormSchema = z.object({
    firstName: z.string().trim().min(2, {message: "First Name is required"}),
    lastName: z.string().trim().min(2, {message: "Last Name is required"}),
    role: z.string().trim().min(2, {message: "Role is required"}),
    merchant: z.string().trim().min(2, {message: "Merchant is required"}),
    address: z.string().trim().min(2, {message: "Address is required"}),
    dob: z.string(),
    nationalId: z.string().trim().min(2, {message: "NationalId is required"}),
    phoneNumber: z.string().trim().min(2, {message: "Phone number is required"}),
    email: z.string().min(3, {message: "Email is required"}).email({message: "Invalid email address"}),
});