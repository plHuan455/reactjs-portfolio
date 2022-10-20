import { useForm } from "react-hook-form";
import SignInForm, { SignInFields } from "~templates/SignInForm";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

interface FormContainerProps {}

const schema = yup.object({
  username: yup.string().required('Vui lòng nhập tên nhóm!'),
  password: yup.string().required('Vui lòng nhập mật khẩu!'),
  remember: yup.boolean(),
}).required();

const FormContainer: React.FC<FormContainerProps> = () => {
  const method = useForm<SignInFields>({
    mode: 'onBlur',
    defaultValues: {
      username: '',
      password: '',
      remember: false,
    },
    resolver: yupResolver(schema)
  });

  const handleSubmit = (values: SignInFields) => {
    console.log(values);
  }

  return <SignInForm method={method} onSubmit={handleSubmit}/>
}

export default FormContainer;