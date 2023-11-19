import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ArrowMiniDownIcon } from '@/assets'
import { SelectItem } from '@/components/ui/select/selectItem/SelectItem'
import { Typography } from '@/components/ui/typography'
import { Content, Group, Icon, Portal, Root, Trigger, Value } from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './Select.module.scss'

export type ItemsType = {
  title: string
  value: string
}

export type SelectVariant = 'default' | 'pagination'

export type SelectProps = {
  className?: string
  disabled?: boolean
  items: ItemsType[]
  label?: string
  variant?: SelectVariant
} & ComponentPropsWithoutRef<typeof Root>

export const Select = forwardRef<ElementRef<typeof Root>, SelectProps>(
  (
    {
      children,
      className,
      disabled,
      items,
      label,
      onOpenChange,
      onValueChange,
      open,
      value,
      variant = 'default',
      ...rest
    },
    ref
  ) => {
    const classNames = {
      content: clsx(s.content),
      icon: clsx(s.icon),
      label: clsx(s.label, disabled && s.disabled),
      trigger: clsx(s.trigger, s[variant], s[`${variant}Paddings`], className),
    }

    return (
      <Root
        disabled={disabled}
        onOpenChange={onOpenChange}
        onValueChange={onValueChange}
        open={open}
        {...rest}
      >
        {label && (
          <Typography className={classNames.label} variant={'body2'}>
            {label}
          </Typography>
        )}
        <Trigger className={classNames.trigger} ref={ref}>
          <Value placeholder={value} />
          <Icon asChild className={classNames.icon}>
            <ArrowMiniDownIcon disabled={disabled} />
          </Icon>
        </Trigger>

        <Portal>
          <Content className={classNames.content}>
            <Group>
              {items.map(item => (
                <SelectItem
                  key={item.value}
                  title={item.title}
                  value={item.value}
                  variant={variant}
                />
              ))}
            </Group>
          </Content>
        </Portal>
      </Root>
    )
  }
)
