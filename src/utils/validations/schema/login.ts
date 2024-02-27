import {z} from "zod"


export const LoginSchema = z.object({
    password: z.string().regex(RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#!$%^&-+=()])(?!.*\\\\s).{8,20}$"), "Password is invalid"),
    email: z.string().min(1, "Email is required").email("Email is invalid")
})


export const RequestPasswordResetSchema = LoginSchema.pick({
    email: true
});

export const ResetPasswordSchema = z.object({
    password: z.string().regex(
        RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#!$%^&-+=()])(?!.*\\s).{8,20}$"),
        "Password must contain at least one number, one lowercase and one uppercase letter, one special character and minimum of 8 characters."
    ),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
});


export type LoginFormValues = z.input<typeof LoginSchema>

export type RequestPasswordResetValues = z.input<typeof RequestPasswordResetSchema>

export type ResetPasswordValues = z.input<typeof ResetPasswordSchema>