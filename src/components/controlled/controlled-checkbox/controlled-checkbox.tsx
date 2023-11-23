import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { CheckBox, CheckBoxProps } from '@/components/ui/checkbox'

export type ControlledCheckboxProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<CheckBoxProps, 'checked' | 'onCheckedChange'>

export const ControlledCheckbox = <TFieldValues extends FieldValues>({
  control,
  defaultValue,
  name,
  ...rest
}: ControlledCheckboxProps<TFieldValues>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue,
    name,
  })

  return <CheckBox checked={value} onCheckedChange={onChange} {...rest} />
}
