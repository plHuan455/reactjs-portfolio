import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import SignUpForm, {SignUpFields} from "~templates/SignUpForm";
import * as yup from 'yup';
import { passwordRegex } from "../../utils/schemas";

interface SignUpFormContainerProps {}

const schema = yup.object({
  fullname: yup.string().required('Vui lòng nhập họ và tên!'),
  email: yup.string().required('Vui lòng nhập email!').email('Email không hợp lệ'),
  username: yup.string().required('Vui lòng nhập tên nhóm!'),
  password: yup.string().required('Vui lòng nhập mật khẩu!').min(5, 'Mật khẩu dài ít nhất 5 ký tự'),
  repeatPassword: yup.string().required('Vui lòng nhập lại mật khẩu!').oneOf([yup.ref('password')], 'Mật khẩu không trùng khớp')
}).required();

const SignUpFormContainer: React.FC<SignUpFormContainerProps> = () => {
  const method = useForm<SignUpFields>({
    mode: 'onBlur',
    defaultValues: {
      fullname: '',
      email: '',
      username: '',
      password: '',
      repeatPassword: '',
    },
    resolver: yupResolver(schema)
  });
  return <SignUpForm method={method} onSubmit={() => {}}/>
}

export default SignUpFormContainer;