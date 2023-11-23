import {SignUpFormValues, useSignUp} from '@/features/auth/ui/signUp/useSignUp.ts';
import {clsx} from 'clsx';

import s from './signUpForm.module.scss'
import {Typography} from '@/components/ui/typography';
import {DevTool} from '@hookform/devtools';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Props = {
    onSubmit: (data: SignUpFormValues) => void
}


export const SignUpForm = ({onSubmit}: Props) => {
    const {control, handleSubmit} = useSignUp()

    const classNames = {
        container: clsx(s.container),
        form: clsx(s.form),
        confirmButton: clsx(s.confirmButton),
        signIn: clsx(s.signIn),
        alreadyHaveAccLabel: clsx(s.alreadyHave)
    }


    return(
        <Card className={classNames.container}>
            <Typography as={'h1'} variant={'large'}>
                Sign Up
            </Typography>
            <form className={classNames.form} onSubmit={handleSubmit(onSubmit)}>
                <DevTool control={control}/>
                {/*<ControlledInput*/}
                {/*    control={control}*/}
                {/*    label={'Email'}*/}
                {/*    name={'email'}*/}
                {/*    placeholder={'Email'}*/}
                {/*/>*/}
                {/*<ControlledInput*/}
                {/*    control={control}*/}
                {/*    label={'Password'}*/}
                {/*    name={'password'}*/}
                {/*    placeholder={'Password'}*/}
                {/*/>*/}
                {/*<ControlledInput*/}
                {/*    control={control}*/}
                {/*    label={'Confirm Password'}*/}
                {/*    name={'confirmPassword'}*/}
                {/*    placeholder={'Confirm Password'}/>*/}
                <Button className={classNames.confirmButton} fullWidth type={'submit'}>Sign Up</Button>
            </form>
            <Typography className={classNames.alreadyHaveAccLabel}>Already have an account?</Typography>
            <Button as={'a'} className={classNames.signIn} variant={'link'}>
                Sign In
            </Button>
        </Card>
    )
}