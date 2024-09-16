"use client";
import React, { useEffect, useRef, useState } from "react";
import AuthButton from "./AuthButton";
import { register, loginWithCreds } from "@/app/actions/auth";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { getUserByEmail, isEmail } from "@/data/user";
import axios from "axios";

export const LoginForm = () => {
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const logInFormSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(4, "Password must be at least 4 characters"),
  });

  const loginForm = useForm<z.infer<typeof logInFormSchema>>({
    resolver: zodResolver(logInFormSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof logInFormSchema>) => {
    const res: any = await loginWithCreds(values as unknown as FormData);
    if (res.error) {
      if (res.error.indexOf("email") !== -1) {
        console.log(res.error);
        setEmailError(res.error);
      }
      if (res.error.indexOf("password") !== -1) {
        setPasswordError(res.error);
      }
    }
  };

  return (
    <Form {...loginForm}>
      <form
        onSubmit={loginForm.handleSubmit(onSubmit)}
        className="bg-white p-3 rounded-lg shadow space-y-2 w-full"
      >
        <FormField
          name="email"
          control={loginForm.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {emailError && <FormMessage>{emailError}</FormMessage>}
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={loginForm.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {passwordError && <FormMessage>{passwordError}</FormMessage>}
            </FormItem>
          )}
        />
        <div className="mt-4">
          <AuthButton name="Log In" />
        </div>
      </form>
      <div className="text-center text-sm">
        <p>
          Already have an account? click here to{" "}
          <a
            href="/auth/register"
            className="font-medium text-[#BA3ADA] hover:text-indigo-500"
          >
            Register
          </a>
        </p>
      </div>
    </Form>
  );
};
export const SignUpForm = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);

  useEffect(() => {
    const checkEmailExists = async (email: string) => {
      const data = {
        email,
      };
      const res = await axios.put("/api/user", data);
      if (res.data) {
        setEmailError("Email already exists");
      } else {
        setEmailError(null);
      }
    };

    if (email) {
      const debounceTimeout = setTimeout(() => {
        checkEmailExists(email);
      }, 1000);

      return () => clearTimeout(debounceTimeout);
    }
  }, [email]);
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <form action={register} className="w-full flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-900">
            User Name
          </label>
          <Input
            ref={ref}
            name="userName"
            type="text"
            className="border-2 border-gray-500 focus:border-orange-500 p-5"
            placeholder="type your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">
            Email
          </label>
          <Input
            ref={ref}
            name="email"
            type="email"
            onChange={handleEmailChange}
            className="border-2 border-gray-500 focus:border-orange-500 p-5"
            placeholder="type your email"
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">
            Password
          </label>
          <Input
            ref={ref}
            name="password"
            type="password"
            className="border-2 border-gray-500 focus:border-orange-500 p-5"
            placeholder="type your password"
          />
        </div>
        <div className="mt-4">
          <AuthButton name="Register" />
        </div>
      </form>
    </div>
  );
};
