import { auth } from "@/auth";
import React from "react";
import { redirect } from "next/navigation";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session) {
    redirect("/auth/sign-in");
  }
  return <div>{children}</div>;
};

export default layout;
