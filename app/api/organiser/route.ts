import { auth } from "@/auth";
import prisma from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const { user }: any = await auth();
    const id = user.user.id;

    const isAdmin = await prisma.user.findUnique({
      where: {
        id: id,
        role: "ADMIN",
      },
    });

    if (!isAdmin) {
      return new NextResponse("un authorised request", { status: 400 });
    }

    const organiser = await prisma.organiser.findMany({
      orderBy: {},
    });

    return NextResponse.json(organiser, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return new NextResponse("un caught error from database", { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    console.log(data, "data");
    const user = await auth();

    console.log(user, "user");

    let userId = user?.user?.id;
    const isApllied = await prisma.organiser.findUnique({
      where: {
        userId,
      },
    });
    console.log(isApllied)
    if (isApllied) {
      return new NextResponse(
        "hey you are all ready applied to Orgniser our team will reach you soon.."
      ,{status:400});
    }
    const res = await prisma.organiser.create({
      data: {
        userId,
        ...data,
      },
    });
    console.log(res);
    if (!user) {
      return new NextResponse(
        "form submitted,\nplease login to explore more about Maasta",
        { status: 200 }
      );
    }

    return new NextResponse("Organiser form Submitted", { status: 200 });
  } catch (error: any) {
    console.log(error);
    return new NextResponse("unCaught mongo error", { status: 500 });
  }
};
