import prisma from "@/prisma/index";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    console.log({ user });
    return user;
  } catch (error) {
    return null;
  }
};
export const isEmail = async (email: string) => {
  try {
    const user = await prisma.user.findMany({
      where: {
        email: email as string,
      }
    });
    return user;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });

    return user;
  } catch (error) {
    return null;
  }
};
