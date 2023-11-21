import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Select, SelectProps } from '@/components/ui/select'

export type ControlledSelectProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<SelectProps, 'onValueChange' | 'value'>

export const ControlledSelect = <TFieldValues extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledSelectProps<TFieldValues>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    name,
  })

  return <Select onValueChange={onChange} value={value} {...rest} />
}
