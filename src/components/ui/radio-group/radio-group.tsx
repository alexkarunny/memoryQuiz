import { RadioItem, RadioItems } from '@/components/ui/radio-group/radio-item/radio-item'
import { Root } from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

export type RadioGroupProps = {
  items: RadioItems[]
}

export const RadioGroup = (props: RadioGroupProps) => {
  const { items } = props

  return (
    <form>
      <Root aria-label={'View density'} className={s.RadioGroupRoot} defaultValue={'default'}>
        {items.map(item => (
          <RadioItem key={item.label} {...item} />
        ))}
      </Root>
    </form>
  )
}
