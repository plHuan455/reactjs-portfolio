import { useForm } from "react-hook-form";
import SignInForm, { SignInFields } from "~templates/SignInForm";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../../store";
import { signIn } from "../../store/system";
import { toast } from 'react-toastify';
import { useMutation } from "@tanstack/react-query";
import { signInService } from "~services/auth";

interface FormContainerProps {}

const schema = yup.object({
  username: yup.string().required('Vui lòng nhập tên nhóm!'),
  password: yup.string().required('Vui lòng nhập mật khẩu!'),
  remember: yup.boolean(),
}).required();

const FormContainer: React.FC<FormContainerProps> = () => {
  const dispatch = useAppDispatch();
  const {mutate: signInMutate, isLoading: isSubmitting} = useMutation({
    mutationKey: ['sign-in'],
    mutationFn: signInService,
    onSuccess: (data) => {
      toast.success('Đăng nhập thành công!');
      dispatch(signIn(data));
    },
    onError: () => {
      toast.error('Tài khoản hoặc mật khẩu không chính xác');
    }
  })

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
    // console.log(values);
    signInMutate(values);
  }

  return <SignInForm method={method} onSubmit={handleSubmit} isSubmitting={isSubmitting}/>
}

export default FormContainer;