import React from 'react';
import { Controller, FormProvider, UseFormReturn } from 'react-hook-form';
import { FiUser } from 'react-icons/fi';
import { MdDriveFileRenameOutline, MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import Button from '~atoms/Button';
import { Input } from '~atoms/Input';
import Text from '~atoms/Text';

export interface SignUpFields {
  username: string;
  password: string;
  email: string;
  fullName: string;
  repeatPassword: string;
}


interface SignUpFormProps {
  method: UseFormReturn<SignUpFields>;
  onSubmit: (values: SignUpFields) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ method, onSubmit }) => {
  return <div className="t-signUpForm">
    <div className="t-signUpForm_wrapper">
      <div className="t-signUpForm_title">
        <Text type='h1' modifiers={['42x52', 'white', '400', 'center']}>Đăng Ký</Text>
      </div>
      <div className="t-signUpForm_description">
        <Text modifiers={['16x20', 'white', 'fontLexend', 'center']}>Sign in and start managing your banks</Text>
      </div>
      <FormProvider {...method}>
        <form className='t-signUpForm_form' onSubmit={method.handleSubmit(onSubmit)}>
          <div className="t-signUpForm_form_field">
            <Controller
              name="fullName"
              render={({ field: { onChange, onBlur, value }, fieldState }) =>
                <Input
                  variant='auth'
                  error={fieldState?.error?.message}
                  value={value}
                  icon={MdDriveFileRenameOutline}
                  onChange={onChange}
                  label="Họ và tên"
                  onBlur={onBlur}
                  placeholder="Họ và tên"
                  id="sign-in-fullname"
                />
              }
            />
          </div>
          <div className="t-signUpForm_form_field">
            <Controller
              name="email"
              render={({ field: { onChange, onBlur, value }, fieldState }) =>
                <Input
                  variant='auth'
                  error={fieldState?.error?.message}
                  value={value}
                  icon={MdOutlineEmail}
                  label="Email"
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Email"
                  type='email'
                  id="sign-up-email"
                />
              }
            />
          </div>
          <div className="t-signUpForm_form_field">
            <Controller
              name="username"
              render={({ field: { onChange, onBlur, value }, fieldState }) =>
                <Input
                  variant='auth'
                  error={fieldState?.error?.message}
                  value={value}
                  label="Tài khoản"
                  icon={FiUser}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Tên đăng nhập"
                  id="sign-up-username"
                />
              }
            />
          </div>
          <div className="t-signUpForm_form_field">
            <Controller
              name="password"
              render={({ field: { onChange, onBlur, value }, fieldState }) =>
                <Input
                  variant='auth'
                  error={fieldState?.error?.message}
                  value={value}
                  label="Mật khẩu"
                  onChange={onChange}
                  onBlur={onBlur}
                  icon={RiLockPasswordLine}
                  placeholder="Mật khẩu"
                  type="password"
                  id="sign-up-password"
                />
              }
            />
          </div>
          <div className="t-signUpForm_form_field">
            <Controller
              name="repeatPassword"
              render={({ field: { onChange, onBlur, value }, fieldState }) =>
                <Input
                  id="sign-up-repeat-password"
                  variant='auth'
                  label="Nhập lại mật khẩu" 
                  error={fieldState?.error?.message}
                  value={value}
                  placeholder="Nhập lại mật khẩu"
                  icon={RiLockPasswordLine}
                  type="password"
                  onChange={onChange}
                  onBlur={onBlur}
                />
              }
            />
          </div>
          <Button className="t-signUpForm_form_button" type='submit' variant='auth' >
            Đăng ký
          </Button>
        </form>
      </FormProvider>
    </div>
  </div>
};

SignUpForm.defaultProps = {
};

export default SignUpForm;

