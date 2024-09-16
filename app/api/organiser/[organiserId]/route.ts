import { auth } from "@/auth";
import prisma from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { organiserId: string } }
) => {
  try {
    const organiserId = params.organiserId;
    const { user }: any = await auth();
    const id = user.user.id;

    if (!user) {
      return new NextResponse("un authendicated", { status: 400 });
    }

    const organiser = await prisma.organiser.findUnique({
      where: {
        id: organiserId,
      },
      include: {
        events: true,
        magazines: true,
      },
    });

    return NextResponse.json(organiser, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return new NextResponse("un caught mongo error", { status: 500 });
  }
};

// admin
export const POST = async (
  req: NextRequest,
  { params }: { params: { organiserId: string } }
) => {
  try {
    const organiserId = params.organiserId;
    const user: any = await auth();

    const isAdmin = user.user.role == "ADMIN";
    if (isAdmin) {
      const updateRole = await prisma.organiser.update({
        where: {
          id: organiserId,
        },
        data: {
          isVerified: true,
        },
      });

      const roleInUser = await prisma.user.update({
        where: {
          id: updateRole.userId,
        },
        data: {
          role: "ORGANISER",
        },
      });
      return new NextResponse("Organiser Role updated", { status: 200 });
    } else {
      return new NextResponse("un authorised access", { status: 400 });
    }
  } catch (error) {
    console.log(error);
    return new NextResponse("un caught error", { status: 500 });
  }
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: { organiserId: string } }
) => {
  try {
    const organiserId = params.organiserId;
    const { user }: any = await auth();
    const id = user.user.id;

    const data: any = req.body;

    if (!user) {
      return new NextResponse("un authendicated", { status: 400 });
    }

    if (data.isVerified) {
      return new NextResponse("verified details only can update admin..");
    }
    const updateOrganiser = await prisma.organiser.update({
      where: {
        id: organiserId,
      },
      data: {
        ...data,
      },
    });
    return NextResponse.json(updateOrganiser, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return new NextResponse("un caught error", { status: 500 });
  }
};
