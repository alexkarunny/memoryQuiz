import {useCreateNewPassword} from '@/features/auth/ui/createNewPassword/useCreateNewPassword.ts';
import {Typography} from '@/components/ui/typography';
import {DevTool} from '@hookform/devtools';
import {ControlledInput} from '@/components/controlled';
import {Button} from '@/components/ui/button';
import {clsx} from 'clsx';

import s from './createNewPasswordForm.module.scss'
import { Card } from '@/components/ui/card';


type Props = {
    onSubmit: () => void
}
export const CreateNewPasswordForm = ({ onSubmit }: Props) => {
    const {control, handleSubmit} = useCreateNewPassword()
    const classNames = {
        input: clsx(s.input),
        confirmButton: clsx(s.confirmButton),
        container: clsx(s.container),
        formHeader: clsx(s.formHeader),
        form: clsx(s.form),
        createNewPasswordLabel: clsx(s.createNewPassword)
    }


    return (
        <Card className={classNames.container}>
            <Typography variant={'large'} className={classNames.formHeader}>Create new Password</Typography>
            <form className={classNames.form} onSubmit={handleSubmit(onSubmit)}>
                <DevTool control={control}/>
                <ControlledInput name={'password'} placeholder={'Password'} control={control} variant={'password'} label={'Password'}/>
                <Typography variant={'body2'} className={classNames.createNewPasswordLabel}>
                    Create new password and we will send you further instructions to email
                </Typography>
                <Button fullWidth type={'submit'} className={classNames.confirmButton}>Create new Password</Button>
            </form>
        </Card>
    )
}