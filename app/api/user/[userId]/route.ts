import { auth } from "@/auth";
import prisma from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest) => {
  try {
    const { data }: any = req.body;

    const user = await auth();
    console.log(user?.user?.id);
    const id = user?.user?.id;
    if (!user) {
      throw new NextResponse("authendication required", { status: 400 });
    }

    const updateUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        //   name:data?.userName,
        password: data?.password,
        profilePic: data?.profilePic,
        name: data?.name,
      },
    });
    return new NextResponse("user updated Successfully");
  } catch (error: any) {
    console.log(error);
    return new NextResponse("unCaught mongo error", { status: 500 });
  }
};
