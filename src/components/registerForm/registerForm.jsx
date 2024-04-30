"use client";

import { register } from "../../lib/action";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className="flex flex-col text-center gap-30px " action={formAction}>
      <input
        className=" bg-slate-800 mb-3 p-4 rounded"
        type="text"
        placeholder="username"
        name="username"
      />
      <input
        className=" bg-slate-800 mb-3 p-4 rounded"
        type="email"
        placeholder="email"
        name="email"
      />
      <input
        className=" bg-slate-800 mb-3 p-4 rounded"
        type="password"
        placeholder="password"
        name="password"
      />
      <input
        className=" bg-slate-800 mb-3 p-4 rounded"
        type="password"
        placeholder="password again"
        name="passwordRepeat"
      />
      <button className="w-[100%] bg-blue-700 p-2 mb-5 font-bold rounded">
        Register
      </button>
      {state?.error}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
