"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Small } from "./texts";
import { useRef, useState } from "react";

import * as z from "zod";
import { useSession } from "next-auth/react";
import { useFormState } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import {  useForm } from "react-hook-form";
import axios from "axios";
import router from "next/navigation";
import toast from "react-hot-toast";
import { FormControl, FormField, FormItem, FormMessage,Form } from "../ui/form";

const schema = z.object({
  email: z.string().email(),
});

type NewsFormValues = z.infer<typeof schema>;

const NewsLetter = () => {
  const session = useSession();
  // const router = useRouter();
  const [loading, setLoading] = useState(false);
  const email = session.data?.user?.email;

  const ref = useRef(null);

  const defaultValues = {
    email: email || "",
  };

  const form = useForm<NewsFormValues>({
    resolver: zodResolver(schema),
    defaultValues,
  });
  const message = "newsLetter subscribed...";
  const onSubmit = async (data: NewsFormValues) => {
    let formdata;
    if (session) {
      formdata = {
        email: data.email,
      };
    }

    try {
      setLoading(true);
      console.log(formdata);
      const res = await axios.post(`/api/user`, formdata);
      console.log(res);
      toast.success(message);
      // revalidatePath('/')
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="pb-8 xl:pb-2 lg:pb-6 md:pb-3">
        <div className="w-[80%] sm:w-[70%] md:h-[200px] mx-auto bg-transparent flex flex-col gap-3 md:flex-row md:gap-0">
          <div className="w-[100%] md:w-[60%] md:text-start text-center flex flex-col gap-2 p-5">
            <h3 className="capitalise md:text-2xl text-xl font-bold">
              why you should subscribe to our newsletter
            </h3>
            <Small>
              Subscribe to our newsletter and stay ahead of the curve! Get the
              latest updates, exclusive insights, and exciting offers delivered
              right to your inbox. Don't miss out &apos; be in the know.
            </Small>
          </div>
          <div className="w-[100%] md:w-[40%] mx-auto flex justify-center items-center md:p-none">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-1"
              >
                <div className="w-full justify-between flex border-black rounded-xl border-2 overflow-hidden">
                  <div className="p-0 pl-3 w-[62%] rounded-none flex-1 ">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
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
                  <Button
                    type="submit"
                    className="bg-black rounded-none w-[38%] text-xs lg:text-sm"
                    // style={{ fontSize: "calc(10px + 0.7vw)" }}
                    disabled={loading}
                  >
                    Subscribe
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
