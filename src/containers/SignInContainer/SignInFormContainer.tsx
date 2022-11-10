import { useForm } from "react-hook-form";
import SignInForm, { SignInFields } from "~templates/SignInForm";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../../store";
import { signInAsync } from "../../store/system";
import { unwrapResult } from "@reduxjs/toolkit";

interface FormContainerProps {}

const schema = yup.object({
  username: yup.string().required('Vui lòng nhập tên nhóm!'),
  password: yup.string().required('Vui lòng nhập mật khẩu!'),
  remember: yup.boolean(),
}).required();

const FormContainer: React.FC<FormContainerProps> = () => {
  const dispatch = useAppDispatch();

  const method = useForm<SignInFields>({
    mode: 'onBlur',
    defaultValues: {
      username: '',
      password: '',
      remember: false,
    },
    resolver: yupResolver(schema)
  });

  const handleSubmit = async(values: SignInFields) => {
    try {
      const actionResult = await dispatch(signInAsync({username: values.username, password: values.password}))
      const currUser = unwrapResult(actionResult);
      console.log(currUser);
    }catch(err){
    }
  }

  return <SignInForm method={method} onSubmit={handleSubmit}/>
}

export default FormContainer;