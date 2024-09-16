"use server";
import { auth } from "@/auth";
import prisma from "@/prisma";
import { redirect } from "next/navigation";
import z from "zod";

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phoneNumber: z.string().min(10).refine((val) => !isNaN(Number(val)), {
    message: "Invalid phone number",
  }),
  message: z.string().min(50),
});

export type InitialStateOfOrganiser = {
  errors: any;
  name?: string[];
  email?: string[];
  phoneNumber?: string[];
  message?: string[];
  form?: string[];
};

export async function applyOrganiser(
  formState: InitialStateOfOrganiser,
  formData: FormData
): Promise<InitialStateOfOrganiser> {

  const data = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
    message: formData.get("message"),
  });

  const session = await auth();
  console.log(session,"session")
  const userId = session?.user?.id
  console.log(userId,"userId")
console.log(data)
  if (!data.success) {
    return {
      ...formState,
      errors: data.error.flatten().fieldErrors,
    };
  }
else{
if(!userId){
  return {
    ...formState,
    errors:"log in properly"
  }
}
  const res = await prisma.organiser.create({
    data:{
      userId:userId,
      phoneNumber:data.data.phoneNumber,
      message:data.data.message
    }
  })
if(!res){
  return res
}
  console.log(res,"res")
  redirect("/about");
  
}
  
}

const schemaSub = z.object({
  email: z.string().email(),
});

interface InitailStateSub {
  email?: [];
}


export default  async function subscribe(
  formState: InitailStateSub,
  formData: FormData
): Promise<InitailStateSub> {
  return new Promise(async(resolve, reject) => {

  const session = await auth();
  const userId = session?.user?.id

    const data = schema.safeParse({
      email: formData.get("email")
    });

    if (!data.success) {
      reject(data.error.flatten().fieldErrors);
      return;
    }
    const subscribe = await prisma.user.update({
     where:{
      id:userId
     },
     data:{
      isSubscribed:true
     }
    })
    resolve(formState);
  });
}