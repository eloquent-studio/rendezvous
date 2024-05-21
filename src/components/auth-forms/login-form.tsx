"use client";

import { useState, useCallback } from "react";
import Input from "../props/input";
import Button from "../props/button";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { LogInAction } from "@/actions/auth/login";
import { useFormState } from "react-dom";

const initialState: { email: string; password: string } = {
  email: "",
  password: "",
};

const LoginForm = ({ next }: { next: string }) => {
  const [state, formAction] = useFormState(LogInAction, initialState);

  const [variant, setVariant] = useState("user");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "user" ? "business" : "user"
    );
  }, []);

  const [passwordShow, SetPasswordShow] = useState(false);
  const [twoFactorAuth, SetTwoFactorAuth] = useState(false);

  return (
    <div className="flex flex-row justify-center items-center h-full w-screen">
      <div className="hidden h-screen w-1/2 bg-slate-300 md:flex flex-col justify-between items-start p-8">
        <h1 className="flex flex-row items-center justify-start gap-2 text-xl uppercase">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000"
            >
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
          </Link>
          Welcome Back!
        </h1>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="w-fit flex flex-row items-center justify-center gap-4">
            <h1 className="text-8xl font-semibold uppercase">r.</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="128px"
              viewBox="0 -960 960 960"
              width="128px"
              fill="#7c3aed"
            >
              <path d="M480-40q-23 0-46-3t-46-8Q300 14 194.5-4.5T33-117q-45-74-29-159t77-143v-3Q19-479 4-562.5T32-720q37-63 102-95.5T271-838q32-57 87.5-89.5T480-960q66 0 121.5 32.5T689-838q72-10 137 22.5T928-720q43 74 28 157.5T879-422v3q61 58 77 143t-29 159Q871-23 765.5-4.5T572-51q-23 5-46 8t-46 3ZM288-90q-32-18-61-41.5T174-183q-24-28-42.5-60.5T101-311q-20 36-20 76.5t21 75.5q29 48 81.5 68.5T288-90Zm384 0q52 20 104.5-.5T858-159q21-35 21-75.5T859-311q-12 35-30.5 67.5T786-183q-24 28-52.5 51.5T672-90Zm-192-30q134 0 227-93t93-227q0-29-4.5-55.5T782-547q-29 20-64 31t-73 11q-102 0-173.5-71.5T400-750q-104 26-172 112t-68 198q0 134 93 227t227 93ZM360-350q-21 0-35.5-14.5T310-400q0-21 14.5-35.5T360-450q21 0 35.5 14.5T410-400q0 21-14.5 35.5T360-350Zm240 0q-21 0-35.5-14.5T550-400q0-21 14.5-35.5T600-450q21 0 35.5 14.5T650-400q0 21-14.5 35.5T600-350ZM94-544q9-33 23-63.5t33-57.5q19-27 41.5-51t48.5-44q-43 0-79.5 21T102-681q-20 32-22 67t14 70Zm772 0q16-35 14-70t-22-67q-22-37-58.5-58T720-760q26 20 48.5 44t41.5 51q19 27 33 57.5t23 63.5Zm-221-41q29 0 54-9t46-25q-21-32-50-57.5T632-721q-34-19-72-29t-80-10v10q0 69 48 117t117 48Zm-54-239q-20-26-49-41t-62-15q-33 0-62 15t-49 41q26-8 54-12t57-4q29 0 57 4t54 12ZM150-665Zm660 0Zm-330-85Zm0-90ZM174-183Zm612 0Z" />
            </svg>
          </div>
        </div>
        <h1 className="text-sm text-gray-900 font-base">
          Not a member yet?{" "}
          <Link className="font-semibold hover:underline" href="/register">
            Sign Up Now
          </Link>
        </h1>
      </div>
      <form
        className="h-screen w-full md:w-1/2 px-8 lg:px-16 flex flex-col justify-center"
        action={formAction}
      >
        <div className="flex items-center justify-center mb-2">
          <p className="text-xl font-semibold">
            {variant === "user"
              ? "Sign In to your account"
              : "Sign In to business account"}
          </p>
        </div>
        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>
        {!twoFactorAuth && (
          <>
            <div className="mt-4 mb-8">
              <Input placeholder="Email" type="email" name="email" />
              {state.email && (
                <p className="text-xs font-medium text-red-600">
                  {state.email}
                </p>
              )}
            </div>
            <div className="mb-8">
              <div className="relative">
                <Input
                  placeholder="Password"
                  type={passwordShow ? "text" : "password"}
                  name="password"
                />
                <button
                  type="button"
                  onClick={() => SetPasswordShow((s) => !s)}
                  className="absolute right-1 top-0 p-2 px-2.5 hover:bg-transparent"
                >
                  {!passwordShow ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="#1f2937"
                    >
                      <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="#1f2937"
                    >
                      <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
                    </svg>
                  )}
                </button>
              </div>
              {state.password && (
                <p className="text-xs font-medium text-red-600">
                  {state.password}
                </p>
              )}
            </div>
          </>
        )}
        {twoFactorAuth && (
          <div className="mb-6">
            <label htmlFor="TFACode" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <Input placeholder="123456" type="number" name="TFACode" />
          </div>
        )}

        <input type="hidden" value={next ? next : (variant == "business" ? "/dashboard" : "/")} name="next" />

        <div className="text-center">
          <Button fullWidth large secondary>
            {twoFactorAuth ? "Confirm" : "Sign In"}
          </Button>
          <div className="w-full h-fit flex flex-row ic justify-between md:justify-end mt-4">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-1">
              <h1 className="visible md:hidden text-sm text-gray-900 font-medium">
                Don&apos;t have an account yet?{" "}
                <Link className="font-bold hover:underline" href="/register">
                  Sign Up
                </Link>
              </h1>
            </div>
            <Link
              className="text-sm font-semibold underline hover:text-gray-800"
              href="#"
            >
              Forgot your password?
            </Link>
          </div>

          <div className="w-full flex flex-row items-center justify-center gap-2 my-8">
            <hr className="w-full h-0.5 bg-gray-300 border-0 rounded" />
            <p className="text-gray-600 text-sm">or</p>
            <hr className="w-full h-0.5 bg-gray-300 border-0 rounded" />
          </div>
          <div className="w-full h-fit flex flex-col items-center justify-center gap-4">
            <Button
              onClick={toggleVariant}
              type="button"
              fullWidth
              large
              className="flex items-center justify-center gap-2"
            >
              {variant === "user" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  className="text-black"
                >
                  <path d="M480-440q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0-80q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0 440q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-400Zm0-315-240 90v189q0 54 15 105t41 96q42-21 88-33t96-12q50 0 96 12t88 33q26-45 41-96t15-105v-189l-240-90Zm0 515q-36 0-70 8t-65 22q29 30 63 52t72 34q38-12 72-34t63-52q-31-14-65-22t-70-8Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#000"
                >
                  <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                </svg>
              )}
              {variant === "user"
                ? "Sign in as a business"
                : " Sign in as a customer"}
            </Button>
            {variant == "user" && (
              <Button
                onClick={() => signIn("google")}
                type="button"
                fullWidth
                large
                className="flex items-center justify-center gap-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>
                Continue with Google
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
