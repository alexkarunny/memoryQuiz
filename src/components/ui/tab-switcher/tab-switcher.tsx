import { ReactNode } from 'react'

import { List, Root, Trigger } from '@radix-ui/react-tabs'

import s from './tab-switcher.module.scss'

import { TabItem } from './tab-item/tab-item'

export type TabItemType = {
  content?: ReactNode
  disabled?: boolean
  label: string
  value: string
}

type PropsType = {
  onValueChange?: (value: string) => void
  tabs: TabItemType[]
}
export const TabSwitcher = (props: PropsType) => {
  const { tabs } = props

  return (
    <Root className={s.root} defaultValue={tabs[0].value}>
      <List aria-label={'tabs example'} className={s.list}>
        {tabs.map(tab => (
          <Trigger className={s.trigger} disabled={tab.disabled} key={tab.value} value={tab.value}>
            {tab.label}
          </Trigger>
        ))}
      </List>
      {tabs.map(tab => (
        <TabItem key={tab.value} value={tab.value}>
          {tab.content}
        </TabItem>
      ))}
    </Root>
  )
}
