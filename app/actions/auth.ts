"use server";

import { signIn, signOut } from "@/auth";
import db from "@/prisma";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const login = async (provider: string) => {
  // await signIn(provider, { redirectTo: "/" });
  // revalidatePath("/");
  // redirect("/");
  try {
    await signIn(provider, { callbackUrl: "/" });
    revalidatePath("/"); // Revalidate the cache for the given path
    redirect("/"); // Redirect the user to the home page
  } catch (error) {
    console.error("Login failed:", error);
  }
};

export const logout = async () => {
  await signOut({ redirectTo: "/" })
    .then(() => {
      revalidatePath("/");
      redirect("/");
    })
    .catch((e: any) => {
      console.log(e.message);
    });
};

export const loginWithCreds = async (formData: FormData) => {
  const { email, password }: any = formData;
  console.log(formData, "email");

  const existingUser = await getUserByEmail(email);
  console.log(existingUser, "exist");
  if (existingUser === null) {
    console.log("User does not exist");
    return { error: "given is email does not exist" };
  }
  const passwordsMatch = await bcrypt.compare(
    password,
    existingUser?.password as string
  );
  console.log(passwordsMatch, "matched");
  if (!passwordsMatch) {
    return { error: "password is not matched" };
  }
  if (existingUser && passwordsMatch) {
    const rawFormData = {
      email,
      password,
      role: "USER",
      redirectTo: "/",
    };
    try {
      await signIn("credentials", rawFormData);
    } catch (error: any) {
      console.log(error, "errors from auth");
      if (error instanceof AuthError) {
        switch (error.type) {
          case "CredentialsSignin":
            return { error: "Invalid credentials!" };
          default:
            return { error: "Something went wrong!" };
        }
      }

      throw error;
    }
    revalidatePath("/");
    redirect("/");
  }
};

type Registeration = {
  userName?: string[];
  email?: string[];
  password?: string[];
  errors?: any;
  form?: any;
};

const RegisterSchema = z.object({
  userName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

export const register = async (
  formData: FormData
  // formState: Registeration
) => {
  console.log(formData);
  const data = RegisterSchema.safeParse({
    userName: formData.get("userName"),
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    role: "USER",
    redirectTo: "/",
  });

  console.log(data, "raw");

  const existingUser = await getUserByEmail(data.data?.email as string);
  console.log(existingUser, "exist");

  if (existingUser) {
    throw new Error("User already exists with this email");
  }

  const hash = await bcrypt.hash(data.data?.password as string, 10);
  console.log(hash);
  const user = await db.user.create({
    data: {
      email: data?.data?.email,
      name: data?.data?.userName as string,
      password: hash as unknown as string,
      role: "USER",
    },
  });
  console.log(user);

  console.log(user);
  const login = {
    email: data?.data?.email,
    password: data?.data?.password,
  };
  try {
    await signIn("credentials", login);
  } catch (error: any) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
  revalidatePath("/");
  redirect("/");
};
export { signOut, signIn };
