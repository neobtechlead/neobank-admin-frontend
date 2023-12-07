import {z} from "zod"

export const MerchantModificationSchema = z.object({
    businessName: z.string().min(2, "business name is required"),
    email: z.string().min(3, "Email is required").email("email is invalid"),
    balance: z.number().min(0)
})