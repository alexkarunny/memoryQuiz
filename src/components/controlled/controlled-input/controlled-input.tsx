import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '@/components/ui/input'

export type Props<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'defaultValue' | 'disabled' | 'rules'
> &
  Omit<InputProps, 'onValueChange'>
export const ControlledInput = <T extends FieldValues>({
  control,
  disabled,
  name,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onChange, value },
  } = useController({ control, disabled, name, shouldUnregister })

  return <Input disabled={disabled} onValueChange={onChange} value={value} {...rest} />
}
