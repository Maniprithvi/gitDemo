"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useNewUserFormContext } from "@/app/actions/context/eventform";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const languages = [
  { id: 1, language: "Tamil" },
  { id: 2, language: "English" },
  { id: 3, language: "Hindi" },
  { id: 4, language: "Telugu" },
  { id: 5, language: "Malayalam" },
  { id: 6, language: "Kanada" },
  { id: 7, language: "Marathi" },
];

interface Form1Props {
  goToPrevStep: () => void;
  setStep: () => void; // Move to the next step
}

const Form1: React.FC<Form1Props> = ({ setStep, goToPrevStep }) => {
  const formContext = useNewUserFormContext();

  const newUserFormSchema = z.object({
    eventName: z.string().min(3, "at least 3 characters"), // Corrected spelling
    desc: z.string().min(3, "at least 3 characters"), // Corrected spelling
    language: z.string().toLowerCase(),
    isFeatured: z.boolean(),
  });

  const stepTwoForm = useForm<z.infer<typeof newUserFormSchema>>({
    resolver: zodResolver(newUserFormSchema),
    mode: "onChange",
    defaultValues: {
      eventName: formContext?.user?.eventName || "",
      desc: formContext?.user?.desc || "",
      language: formContext?.user?.language || "",
      isFeatured: formContext?.user?.isFeatured || false,
    },
  });
  const prevStep = () => {
    goToPrevStep();
  };
  const onSubmit = (values: z.infer<typeof newUserFormSchema>) => {
    formContext.updateUserData(values);
    setStep(); // Move to the next step
  };

  return (
    <Form {...stepTwoForm}>
      <form
        onSubmit={stepTwoForm.handleSubmit(onSubmit)}
        className="bg-white p-3 rounded-lg shadow space-y-2 w-full"
      >
        <FormField
          name="eventName"
          control={stepTwoForm.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Name</FormLabel>
              <FormMessage />
              <FormControl>
                <Input {...field} />
              </FormControl>
              {/* <FormDescription className="text-gray-600">
                Enter the event name
              </FormDescription> */}
            </FormItem>
          )}
        />

        <FormField
          name="desc"
          control={stepTwoForm.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormMessage />
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="language"
          control={stepTwoForm.control}
          render={({ field }) => (
            <FormItem className="flex gap-2 items-center">
              <FormLabel>Language</FormLabel>
              <FormMessage />
              <FormControl>
                <select {...field} className="form-select"  >
                  <option value=""  className="mt-0 border border-none space-y-0">Select a language</option>
                  {languages.map((language) => (
                    <option
                      key={language.id}
                      value={language.language}
                      className="hover:bg-orange-100 focus:bg-orange-200"
                    >
                      {language.language}
                    </option>
                  ))}
                </select>
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="isFeatured"
          control={stepTwoForm.control}
          render={({ field }) => (
            <FormItem className="flex h-max gap-2 justify-start items-center">
              <FormLabel>Is Featured</FormLabel>
              <FormMessage />
              <FormControl>
                <Checkbox
                  {...field}
                  className="form-checkbox space-y-0 mt-0"
                  checked={field.value}
                  onCheckedChange={(checked: any) => field.onChange(checked)}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="py-5 space-x-4 flex justify-between">
          <Button type="button" onClick={prevStep}>
            Prev
          </Button>
          <Button type="submit" className="bg-gradient-to-tr text-white from-orange-600 to-orange-400 active:text-white">Next</Button>
        </div>
      </form>
    </Form>
  );
};

export default Form1;
