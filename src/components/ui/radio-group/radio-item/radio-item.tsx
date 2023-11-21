import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography'
import { Indicator, Item } from '@radix-ui/react-radio-group'

import s from './radio-item.module.scss'

export type RadioItems = {
  label: string
} & ComponentPropsWithoutRef<typeof Item>

export const RadioItem = ({ disabled, label, value }: RadioItems) => {
  return (
    <div className={s.container}>
      <Typography as={'label'} className={disabled ? s.label : ''} variant={'body2'}>
        <Item className={s.RadioGroupItem} disabled={disabled} value={value}>
          <Indicator className={s.RadioGroupIndicator} />
        </Item>
        {label}
      </Typography>
    </div>
  )
}
