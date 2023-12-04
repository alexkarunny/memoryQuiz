import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const resetPasswordSchema = z.object({
  password: z.string().min(3, 'Use 3 or more characters for your password'),
})

export type resetPasswordFormValues = z.infer<typeof resetPasswordSchema>

export const useResetPassword = () =>
  useForm<resetPasswordFormValues>({
    defaultValues: {
      password: '',
    },
    resolver: zodResolver(resetPasswordSchema),
  })
