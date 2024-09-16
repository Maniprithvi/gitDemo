"use server";
import { redirect } from "next/navigation";
import z from "zod";
const schema = z.object({
  category:z.string(),
  projectName: z
    .string()
    .min(3, { message: "minimum three characters required" }),
  image: z.string().min(3),
});

export type InitialStateOfPortfolio = {
  projectName?: string[];
  category?:string[],
  image?: string[];
  form?: string[];
};
export async function addPortfolio(
  image: string,
  formState: InitialStateOfPortfolio,
  formData: FormData
): Promise<InitialStateOfPortfolio> {
  const data = schema.safeParse({
    projectName: formData.get("project name"),
    category: formData.get("category"),
    image: image,
  });
  if (!data.success) {
    return data.error.flatten().fieldErrors;
  }

  redirect("/organizers/1");
}
