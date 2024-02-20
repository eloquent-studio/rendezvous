"use client";

import { useState, useCallback } from "react";
import Input from "../props/input";
import Button from "../props/button";
import { GoogleOutlined } from "@ant-design/icons";
import { signIn } from "next-auth/react"

const LoginForm = () => {

  const [variant, setVariant] = useState("user");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "user" ? "business" : "user"
    );
  }, []);


  return (
    <div className="flex flex-row justify-center items-center h-full w-screen">
      <div className="hidden md:flex h-full w-3/12 bg-gray-950 p-4 bg-[url('/0_1.webp')] bg-cover"></div>
      <form className="h-full w-full md:w-6/12 py-16 px-8 md:px-16 flex flex-col justify-center">
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
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium">
            Password
          </label>
          <Input
            placeholder="Password"
            type="password"
            name="password"
          />
        </div>
        <div className="text-center">
          <Button
            label="Sign In"
            fullWidth
            large
          />
          {/* onClick={variant === "user" ? userLogin : businessLogin} */}
          <p className="my-4 pt-1 text-sm font-medium text-center">
            Sign in as
            <a
              onClick={toggleVariant}
              className="text-lime-500 transition duration-150 ease-in-out hover:text-lime-600 focus:text-lime-600 active:text-lime-700 cursor-pointer">
              {variant === "user" ? " Seller?" : " User"}
            </a>
          </p>
          {variant == "user" && <Button type="button" onClick={() => signIn('google')} fullWidth large className="flex items-center justify-center"><GoogleOutlined className="mr-0.5" />Log in with Google</Button>}
        </div>
      </form>
      <div className="hidden md:flex h-screen w-3/12 ">

      </div>
    </div>
  );
};

export default LoginForm;