import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Item } from '@radix-ui/react-select'

type SelectItemProps = {
  className?: string
  title: string
  variant: SelectVariant
} & ComponentPropsWithoutRef<typeof Item>

import { SelectVariant } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from '../Select.module.scss'

export const SelectItem = forwardRef<ElementRef<typeof Item>, SelectItemProps>(
  ({ className, title, variant, ...rest }, ref) => {
    const classNames = {
      item: clsx(s.selectItem, s[variant], s[`${variant}Paddings`]),
      typography: clsx(s.typography),
    }

    return (
      <Item className={classNames.item} ref={ref} {...rest}>
        <Typography className={classNames.typography} variant={'body2'}>
          {title}
        </Typography>
      </Item>
    )
  }
)
