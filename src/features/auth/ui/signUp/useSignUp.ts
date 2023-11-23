import { useForm } from 'react-hook-form'

import { z } from 'zod'

const signUpSchema = z
  .object({
    confirmPassword: z.string().min(3, 'Use 3 or more characters'),
    email: z.string().email({ message: 'Enter a valid email address' }),
    password: z.string().min(3, 'Use 3 or more characters'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ['confirm'],
  })

export type SignUpFormValues = z.infer<typeof signUpSchema>

export const useSignUp = () =>
  useForm<SignUpFormValues>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
  })
