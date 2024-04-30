"use client";

import { login } from "../../lib/action";
import { useFormState } from "react-dom";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form className="flex flex-col text-center gap-30px" action={formAction}>
      <input
        className=" bg-slate-800 mb-3 p-4 rounded"
        type="text"
        placeholder="username"
        name="username"
      />
      <input
        className=" bg-slate-800 mb-3 p-4 rounded"
        type="password"
        placeholder="password"
        name="password"
      />
      <button className="w-[100%] bg-blue-700 p-2 mb-5 font-bold rounded">
        Login
      </button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
