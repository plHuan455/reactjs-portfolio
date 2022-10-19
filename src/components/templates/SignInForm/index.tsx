import React from 'react';
import { Controller, FormProvider, UseFormReturn } from 'react-hook-form';
import Input from '~atoms/Input';
import Text from '~atoms/Text';

export interface SignInFields {
  username: string;
  password: string;
}

interface SignInFormProps {
  method: UseFormReturn<SignInFields>
  onSubmit: (values: SignInFields) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ method, onSubmit }) => {
  return <div className="t-signInForm">
    <div className="t-signInForm_title">
      <Text type='h1' modifiers={['64x80', 'white', '400']}>Đăng nhập</Text>
    </div>
    <div className="t-signInForm_description">
      <Text modifiers={['16x20', 'white', 'fontLexend', 'center']}>Sign in and start managing</Text>
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
                onInputChange={onChange}
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
                onInputChange={onChange}
                onBlur={onBlur}
                placeholder="Mật khẩu"
                id="sign-in-password"
              />
            }
          />
        </div>
      </form>
    </FormProvider>
  </div>
};

SignInForm.defaultProps = {
};

export default SignInForm;

