"use client";

import { useState, useCallback, useEffect } from "react";
import Input from "../props/input";
import Link from "next/link";
import Button from "../props/button";
import { GoogleOutlined } from "@ant-design/icons";
import { signIn } from "next-auth/react"
import { EyeOpenIcon, EyeNoneIcon } from "@radix-ui/react-icons"
import { SignUpAction } from "@/actions/auth/signup";
import { useFormState } from "react-dom"

const initialState: { email: string, password: string, fullname: string } = {
  fullname: "",
  email: "",
  password: "",
}

const RegisterForm = ({ next }: { next: string }) => {

  const [state, formAction] = useFormState(SignUpAction, initialState)

  const [variant, setVariant] = useState("user");

  const [passwordShow, SetPasswordShow] = useState(false)

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "user" ? "business" : "user"
    );
  }, []);

  return (
    <div className="flex flex-row justify-center items-center h-full w-screen">
      <div className="hidden md:flex h-full w-3/12 bg-gray-950 p-4 bg-[url('/0_1.webp')] bg-cover"></div>
      <form className="h-full w-full md:w-6/12 py-16 px-8 lg:px-16 flex flex-col justify-center" action={formAction}>
        <div className="flex items-center justify-center mb-2">
          <p className="text-xl font-semibold">
            {variant === "user"
              ? "Create a new user account"
              : "Create a new business account"}
          </p>
        </div>
        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium">
            Name
          </label>
          <Input
            placeholder="Name"
            type="text"
            name="name"
          />
        </div>
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

        <input type="hidden" value={variant} name="role" id="role" />
        <input type="hidden" value={next} name="next" />

        <div className="text-center">
          <Button
            label="Sign Up"
            fullWidth
            large
          />
          {/* onClick={variant === "user" ? userLogin : businessLogin} */}
          <div className="my-2 sm:my-4 flex flex-col lg:flex-row items-center justify-center gap-1">
            <p className="pt-1 text-sm font-medium text-center lg:w-1/2">
              Become a
              <button
                type="button"
                onClick={toggleVariant}
                className="text-lime-500 ml-1 py-1 sm:py-0 transition duration-150 ease-in-out hover:text-lime-600 focus:text-lime-600 active:text-lime-700 cursor-pointer">
                {variant === "user" ? " Seller?" : " User"}
              </button>
            </p>
            <p className=" pt-1 text-sm font-medium text-center lg:w-1/2">
              Already have an account?
              <Link
                href="/login"
                className="text-lime-500 ml-1 py-1 sm:py-0 transition duration-150 ease-in-out hover:text-lime-600 focus:text-lime-600 active:text-lime-700 cursor-pointer">
                Log in
              </Link>
            </p>
          </div>
          {variant == "user" && <Button onClick={() => signIn('google')} type="button" fullWidth large className="flex items-center justify-center"><GoogleOutlined className="mr-0.5" />Register with Google</Button>}
        </div>
      </form>
      <div className="hidden md:flex h-screen w-3/12"></div>
    </div>
  );
};

export default RegisterForm;