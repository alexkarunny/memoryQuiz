import clsx from 'clsx'
import s from './panel.module.scss'
import {Input} from '@/components/ui/input';
import {Slider} from '@/components/ui/slider';
import {Button} from '@/components/ui/button';

export const Panel = () => {
  const classNames = {
    root:clsx(s.root)
  }

  return <div className={classNames.root}>
    <Input placeholder={'Search'}/>
    <Slider/>
    <Button variant={'secondary'}/>
  </div>
}
