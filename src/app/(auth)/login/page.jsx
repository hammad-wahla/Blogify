import LoginForm from "../../../components/loginForm/loginForm";
import { handleGithubLogin } from "../../../lib/action";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[500px] p-[50px] flex flex-col text-center gap-[30px] rounded-md">
        <form action={handleGithubLogin}>
          <button className="w-[100%] p-[20px] cursor-pointer bg-white text-black font-bold border-0 rounded-md ">
            Login with Github
          </button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
