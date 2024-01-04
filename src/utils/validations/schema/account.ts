import {z} from "zod"

export const CustomerBalanceModificationSchema = z.object({
    newBalance: z.number().min(0)
})