import React from 'react';
import { Controller, FormProvider, UseFormReturn } from 'react-hook-form';
import Button from '~atoms/Button';
import {Checkbox, Input} from '~atoms/Input';
import Text from '~atoms/Text';

export interface SignInFields {
  username: string;
  password: string;
  remember?: boolean;
}

interface SignInFormProps {
  method: UseFormReturn<SignInFields>
  onSubmit: (values: SignInFields) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ method, onSubmit }) => {
  return <div className="t-signInForm">
    <div className="t-signInForm_title">
      <Text type='h1' modifiers={['64x80', 'white', '400', 'center']}>Đăng nhập</Text>
    </div>
    <div className="t-signInForm_description">
      <Text modifiers={['16x20', 'white', 'fontLexend', 'center']}>Sign in and start managing your banks</Text>
    </div>
    <FormProvider {...method} >
      <form className="t-signInForm_form" onSubmit={method.handleSubmit(onSubmit)}>
        <div className="t-signInForm_form_field">
          <Controller
            name="username"
            render={({ field: { onChange, onBlur, value }, fieldState }) =>
              <Input
                error={fieldState?.error?.message}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="Tên Đăng Nhập"
                id="sign-in-username"
              />
            }
          />
        </div>
        <div className="t-signInForm_form_field">
          <Controller
            name="password"
            render={({ field: { onChange, onBlur, value }, fieldState }) =>
              <Input
                error={fieldState?.error?.message}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="Mật khẩu"
                type="password"
                id="sign-in-password"
              />
            }
          />
        </div>

        <div className="t-signInForm_form_field t-signInForm_form_field-checkbox">
          <Controller
            name="remember"
            render={({ field: { onChange, value } }) =>
              <Checkbox
                value={value}
                onChange={onChange}
                id="sign-in-remember"
              />
            }
          />
          <label htmlFor="sign-in-remember" className="t-signInForm_form_field_label"><Text modifiers={['white', '14x18']}>Ghi nhớ đăng nhập</Text></label>
        </div>

        <Button className="t-signInForm_button" type='submit'>
          <Text modifiers={['16x20', 'white', 'fontLexend']}>Đăng nhập</Text>
        </Button>
      </form>
    </FormProvider>
  </div>
};

SignInForm.defaultProps = {
};

export default SignInForm;

