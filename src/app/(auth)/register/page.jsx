import RegisterForm from "../../../components/registerForm/registerForm";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[500px] p-[50px] flex flex-col text-center gap-[30px] rounded-md">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
