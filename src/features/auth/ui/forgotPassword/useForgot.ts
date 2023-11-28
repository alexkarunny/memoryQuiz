import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Enter a valid email address' }),
})

export type ForgotPassValue = z.infer<typeof forgotPasswordSchema>

export const useForgotPass = () =>
  useForm<ForgotPassValue>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordSchema),
  })
