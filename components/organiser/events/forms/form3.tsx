"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { User, useNewUserFormContext } from "@/app/actions/context/eventform";
import { zodResolver } from "@hookform/resolvers/zod";
import { uploadImageFirebase } from "@/lib/firebase";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createEvent } from "@/app/actions/events";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import axios from "axios";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

interface Form3Props {
  goToPrevStep: () => void;
  handleclose: () => void;
}

const Form3: React.FC<Form3Props> = ({ handleclose, goToPrevStep }) => {
  const router = useRouter();
  const session = useSession();
  const userid = session?.data?.user?.id;
  const formContext = useNewUserFormContext();
  const imageRef = useRef<File>();
  const [imgArr, setImgArr] = useState<string[]>(
    formContext?.user?.eventImages || []
  );

  const newUserFormSchema = z.object({
    images: z
      .array(z.string().url())
      .min(1, "At least one image URL is required"),
  });

  const stepThreeForm = useForm<z.infer<typeof newUserFormSchema>>({
    resolver: zodResolver(newUserFormSchema),
    mode: "onChange",
    defaultValues: {
      images: imgArr,
    },
  });

  const prevStep = () => {
    goToPrevStep();
  };

  const addImageArr = (images: string[]) => {
    const updatedUserData: Partial<User> = {
      eventImages: images,
    };
    formContext.updateUserData(updatedUserData);
    console.log("Updated form context", formContext);
  };

  const handleUploadImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();
    input.required = true;
    input.addEventListener("change", async (event: any) => {
      const file = event.target.files[0];
      if (file) {
        await uploadImageFirebase(file)
          .then((res: string) =>
            setImgArr((prev) => {
              const updatedImages = [...prev, res];
              stepThreeForm.setValue("images", updatedImages);
              addImageArr(updatedImages);
              // console.log(imgArr);

              return updatedImages;
            })
          )
          .catch((err: any) => {
            console.log(err.message);
          });
      }
    });
  };

  const onSubmit = async () => {
    const updatedUserData: Partial<User> = {
      eventImages: [...imgArr],
    };
    formContext.updateUserData(updatedUserData);
    const data = formContext.user;
    handleclose();
    console.log(data);
    try {
      const res = await axios.post("/api/event/", data);
      console.log(res);
      toast.success(res.data);
      // router.push(`/${userid}`)
      // redirect(`/${userid}`);
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data);
    }
  };
  return (
    <Form {...stepThreeForm}>
      <form
        onSubmit={stepThreeForm.handleSubmit(onSubmit)}
        className="bg-white p-3 rounded-lg shadow space-y-4 w-full"
      >
        <div className="h-max w-full flex justify-start gap-2">
          {imgArr.map((img, i) => (
            <div key={i} className="w-[20%] aspect-square">
              <Image
                src={img}
                alt={img}
                className="w-full h-full"
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
        <div
          onClick={handleUploadImage}
          className="flex bg-orange-50 h-[80px] items-center place-content-center border border-orange-400 rounded-lg cursor-pointer"
        >
          <p className="text-orange-600 ml-1 font-bold">
            Upload Your Portfolio
          </p>
        </div>
        <div className="py-10 space-x-8 flex justify-between">
          <Button type="button" onClick={prevStep}>
            Prev
          </Button>

          {(formContext.user?.eventImages?.length as number) > 0 ? (
            <Button
              type="submit"
              className="bg-gradient-to-tr text-white from-orange-600 to-orange-400 active:text-white"
            >
              Create
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-gradient-to-tr text-white from-orange-600 to-orange-400 active:text-white"
            >
              Done
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};

export default Form3;
