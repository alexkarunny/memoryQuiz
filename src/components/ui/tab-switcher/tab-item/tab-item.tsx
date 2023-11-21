import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { Content } from '@radix-ui/react-tabs'

import s from './tab-item.module.scss'

type TabItemProps = {
  children: ReactNode
  value: string
} & ComponentPropsWithoutRef<typeof Content>

export const TabItem = forwardRef<ElementRef<typeof Content>, TabItemProps>(
  ({ children, value }, ref) => {
    return (
      <Content className={s.content} ref={ref} value={value}>
        {children}
      </Content>
    )
  }
)
