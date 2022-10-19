import { useForm } from "react-hook-form";
import SignInForm, { SignInFields } from "~templates/SignInForm"

interface FormContainerProps {}

const FormContainer: React.FC<FormContainerProps> = () => {
  const method = useForm<SignInFields>();

  const handleSubmit = (values: SignInFields) => {
    console.log(values);
  }

  return <SignInForm method={method} onSubmit={handleSubmit}/>
}

export default FormContainer;