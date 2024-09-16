"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phoneNumber: z
    .string()
    .min(10)
    .refine((val) => !isNaN(Number(val)), {
      message: "Invalid phone number",
    }),
  message: z.string().min(20),
});

type AboutFormValues = z.infer<typeof formSchema>;

export const AboutForm = () => {
  const router = useRouter();
  const session = useSession();
  console.log(session.data?.user?.email, "from about");
  let email = session.data?.user?.email;
  let name = session.data?.user?.name;
  const [loading, setLoading] = useState(false);

  const action = "Apply";
  const message = "organiser Form Submitted...";

  const defaultValues = {
    name: name || "",
    email: email || "",
    phoneNumber: "",
    message: "",
  };

  const form = useForm<AboutFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: AboutFormValues) => {
    let formdata;
    if (session) {
      formdata = {
        message: data.message,
        phoneNumber: data.phoneNumber,
      };
    }

    try {
      setLoading(true);
      console.log(formdata);
      const res = await axios.post(`/api/organiser`, formdata);
      console.log(res);
      router.refresh();
      toast.success(message);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-[80%] lg:w-[70%] h-max flex flex-col gap-3  xl:gap-2 md:gap-1 mx-auto">
        <Form {...form}>
          <h1 className="capitalize text-center md:text-start font-bold text-xl pb-2">
            Organizer Form{" "}
          </h1>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
          >
            <div className="flex flex-col gap-1 md:gap-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Enter your Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-1 md:gap-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Enter your Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-1 md:gap-3">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>phoneNumber</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="enter your phone number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col gap-1 md:gap-3">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-[200px] flex justify-start items-start"
                        disabled={loading}
                        placeholder="type your message about yours"
                        {...field}
                      ></Textarea>
                      {/* <Input
                        className="h-[200px] flex justify-start items-start"
                        disabled={loading}
                        placeholder="type your message about yours"
                        {...field}
                      /> */}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-tr text-white rounded-lg from-orange-400 to-orange-600 py-2 px-4 "
            >
              {action}
            </button>
          </form>
        </Form>
      </div>
    </>
  );
};
export default AboutForm;
