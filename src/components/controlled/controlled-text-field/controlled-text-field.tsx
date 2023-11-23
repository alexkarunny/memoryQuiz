import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/components/ui/input'

type Props<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'defaultValue' | 'disabled' | 'rules'
> &
  Omit<TextFieldProps, 'onValueChange'>
export const ControlledTextField = <T extends FieldValues>({
  control,
  disabled,
  name,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onChange, value },
  } = useController({ control, disabled, name, shouldUnregister })

  return <TextField disabled={disabled} onValueChange={onChange} value={value} {...rest} />
}
