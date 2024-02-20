"use client";

import { useState, useCallback } from "react";
import Input from "../props/input";
import Button from "../props/button";
import { GoogleOutlined } from "@ant-design/icons";
import { signIn } from "next-auth/react"
import Link from "next/link";
import { LogInAction } from "@/actions/auth/login";
import { useFormState } from "react-dom";
import { EyeOpenIcon, EyeNoneIcon } from "@radix-ui/react-icons"

const initialState: { email: string, password: string } = {
  email: "",
  password: "",
}

const LoginForm = ({ next }: { next: string }) => {

  const [state, formAction] = useFormState(LogInAction, initialState)

  const [variant, setVariant] = useState("user");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "user" ? "business" : "user"
    );
  }, []);

  const [passwordShow, SetPasswordShow] = useState(false)


  return (
    <div className="flex flex-row justify-center items-center h-full w-screen">
      <div className="hidden md:flex h-full w-3/12 bg-gray-950 p-4 bg-[url('/0_1.webp')] bg-cover"></div>
      <form className="h-full w-full md:w-6/12 py-16 px-8 md:px-16 flex flex-col justify-center" action={formAction}>
        <div className="flex items-center justify-center mb-2">
          <p className="text-xl font-semibold">
            {variant === "user"
              ? "Sign in to your account"
              : "Sign in to business account"}
          </p>
        </div>
        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium">
            Email
          </label>
          <Input
            placeholder="Email"
            type="email"
            name="email"
          />
          {state.email && (
            <p className="text-xs font-medium text-red-600">{state.email}</p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium">
            Password
          </label>
          <div className="relative flex items-center">
            <Input
              placeholder="Password"
              type={passwordShow ? "text" : "password"}
              name="password"
            />
            <button type="button" onClick={() => SetPasswordShow(s => !s)} className="absolute right-1 p-2 px-2.5 hover:bg-transparent">
              {
                !passwordShow ? <EyeOpenIcon className="h-5 w-5 bg-transparent" /> : <EyeNoneIcon className="h-5 w-5 bg-transparent fill-current" />
              }
            </button>
          </div>
          {state.password && (
            <p className="text-xs font-medium text-red-600">{state.password}</p>
          )}
        </div>

        <input type="hidden" value={next} name="next" />

        <div className="text-center">
          <Button
            label="Sign In"
            fullWidth
            large
          />
          {/* onClick={variant === "user" ? userLogin : businessLogin} */}
          <div className="my-2 sm:my-4 flex flex-col lg:flex-row items-center justify-center gap-1">
            <p className="pt-1 text-sm font-medium text-center lg:w-1/2">
              Log in
              <button
                type="button"
                onClick={toggleVariant}
                className="text-lime-500 ml-1 py-1 sm:py-0 transition duration-150 ease-in-out hover:text-lime-600 focus:text-lime-600 active:text-lime-700 cursor-pointer">
                {variant === "user" ? " Seller?" : " User"}
              </button>
            </p>
            <p className=" pt-1 text-sm font-medium text-center lg:w-1/2">
              Don&apos;t have an account yet?
              <Link
                href="/register"
                className="text-lime-500 ml-1 py-1 sm:py-0 transition duration-150 ease-in-out hover:text-lime-600 focus:text-lime-600 active:text-lime-700 cursor-pointer">
                Register
              </Link>
            </p>
          </div>
          {variant == "user" && <Button type="button" onClick={() => signIn('google')} fullWidth large className="flex items-center justify-center"><GoogleOutlined className="mr-0.5" />Log in with Google</Button>}
        </div>
      </form>
      <div className="hidden md:flex h-screen w-3/12 ">

      </div>
    </div>
  );
};

export default LoginForm;