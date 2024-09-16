import { auth } from "@/auth";
import prisma from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  console.log("im request to say hai from Maasta...");
  return new NextResponse("haii da");
};
export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const user = await auth();

    const isUser = await prisma.user.update({
      where: {
        id: user?.user?.id,
        email: body.email,
      },
      data: {
        isSubscribed: true,
      },
    });
    console.log(isUser);
    if (!isUser) {
      return new NextResponse("Please login then Subscribed our news letter", {
        status: 400,
      });
    }
    return new NextResponse("Subscribed our news letter successfully", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("unCaught mongo error", { status: 500 });
  }
};

export const PUT = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { email } = body;
    console.log(body, "body");
    const isUser: any = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (isUser) {
      return new NextResponse("A Email already exist with some account", {
        status: 200,
      });
    } else {
      return new NextResponse("", { status: 200 });
    }
  } catch (error) {
    console.log(error);
    return new NextResponse("unCaught mongo error", { status: 500 });
  }
};
