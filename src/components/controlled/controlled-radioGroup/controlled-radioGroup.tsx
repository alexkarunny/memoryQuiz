import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components/ui/radio-group'

export type ControlledRadioGroupProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<RadioGroupProps, 'onValueChange' | 'value'>

export const ControlledRadioGroup = <TFieldValues extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledRadioGroupProps<TFieldValues>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    name,
  })

  return <RadioGroup name={name} onChange={onChange} value={value} {...rest} />
}
