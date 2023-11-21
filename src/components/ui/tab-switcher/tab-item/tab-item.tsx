import { ReactNode } from 'react'

import { Content } from '@radix-ui/react-tabs'

import s from './tab-item.module.scss'

type TabItemProps = {
  children: ReactNode
  value: string
}

export const TabItem = (props: TabItemProps) => {
  const { children, value } = props

  return (
    <Content className={s.content} value={value}>
      {children}
    </Content>
  )
}
