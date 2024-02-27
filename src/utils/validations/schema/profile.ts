import {z} from "zod"


export const ChangePasswordSchema = z.object({

    currentPassword: z.string().regex(
        RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#!$%^&-+=()])(?!.*\\s).{8,20}$"),
        "Password is invalid"
    ),
    password: z.string().regex(
        RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#!$%^&-+=()])(?!.*\\s).{8,20}$"),
        "Password must contain at least one number, one lowercase and one uppercase letter, one special character and minimum of 8 characters."
    ),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
});

export type ChangePasswordValues = z.input<typeof ChangePasswordSchema>