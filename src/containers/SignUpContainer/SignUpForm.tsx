import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import SignUpForm, {SignUpFields} from "~templates/SignUpForm";
import * as yup from 'yup';
import { useMutation } from "@tanstack/react-query";
import { signUpService } from "~services/auth";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { renderPageUrl } from "../../navigation";

interface SignUpFormContainerProps {}

const schema = yup.object({
  fullName: yup.string().required('Vui lòng nhập họ và tên!'),
  email: yup.string().required('Vui lòng nhập email!').email('Email không hợp lệ'),
  username: yup.string().required('Vui lòng nhập tên nhóm!'),
  password: yup.string().required('Vui lòng nhập mật khẩu!').min(5, 'Mật khẩu dài ít nhất 5 ký tự'),
  repeatPassword: yup.string().required('Vui lòng nhập lại mật khẩu!').oneOf([yup.ref('password')], 'Mật khẩu không trùng khớp')
}).required();

const SignUpFormContainer: React.FC<SignUpFormContainerProps> = () => {
  const navigate = useNavigate();
  
  const method = useForm<SignUpFields>({
    mode: 'onBlur',
    defaultValues: {
      fullName: '',
      email: '',
      username: '',
      password: '',
      repeatPassword: '',
    },
    resolver: yupResolver(schema)
  });

  const { mutate: signUpMutate} = useMutation({ 
    mutationKey: ['sign-up'], 
    mutationFn: signUpService,
    onSuccess: (_, params) => {
      toast.success("Đăng ký thành công!");
      setTimeout(()=> navigate(renderPageUrl('SIGN_IN') + `?u=${params.username}`), 2000)
    }
  })

  const handleSubmit = (values: SignUpFields) => {
    signUpMutate(values);
  }
  
  return <SignUpForm method={method} onSubmit={handleSubmit}/>
}

export default SignUpFormContainer;