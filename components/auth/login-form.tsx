import { CardWrapper } from "./card-wrapper";

const LoginForm = () => {
  return (
    <CardWrapper
      backButtonHref="/auth/register"
      backButtonLabel="Did not have an account"
      headerLabel="Welcome back"
      showSocial
    >
      this is login form
    </CardWrapper>
  );
};

export default LoginForm;
