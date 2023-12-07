import {z} from "zod"

export const UserModificationSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().min(3, "Email is required").email("email is invalid"),
})