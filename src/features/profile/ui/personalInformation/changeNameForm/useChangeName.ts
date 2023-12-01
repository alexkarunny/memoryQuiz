import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
const changeNameSchema = z.object({
  name: z.string().min(1, 'Use 1 or more characters for your name'),
})

export type ChangeNameFormValues = z.infer<typeof changeNameSchema>

export const useChangeName = () =>
  useForm<ChangeNameFormValues>({
    defaultValues: {
      name: '',
    },
    resolver: zodResolver(changeNameSchema),
  })
