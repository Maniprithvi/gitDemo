"use client";
import { Button } from "@/components/ui/button";
import {
  FormControl,
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

interface Form2Props {
  goToPrevStep: () => void;
  setStep: () => void;
}

const Form2: React.FC<Form2Props> = ({ goToPrevStep, setStep }) => {
  const formContext = useNewUserFormContext();

  const newUserFormSchema = z.object({
    time: z.string(),
    date: z.string(),
    street1: z.string().min(3, "at least 3 characteres"),
    street2: z.string().min(3, "at least 3 characteres"),
    city: z.string().min(3, "at least 3 characteres"),
    state: z.string().min(3, "at least 3 characteres"),
    nation: z.string().min(3, "at least 3 characteres"),
    pincode: z.string().min(3, "at least 3 characteres"),
  });

  const stepTwoForm = useForm<z.infer<typeof newUserFormSchema>>({
    resolver: zodResolver(newUserFormSchema),
    mode: "onChange",
    defaultValues: {
      time: formContext?.user?.time,
      date: formContext?.user?.date,
      street1: formContext?.user?.street1,
      street2: formContext?.user?.street2,
      state: formContext?.user?.state,
      city: formContext?.user?.city,
      nation: formContext?.user?.nation,
      pincode: formContext?.user?.pincode,
    },
  });

  const onSubmit = (values: z.infer<typeof newUserFormSchema>) => {
    formContext.updateUserData(values);
    setStep();
  };

  const prevStep = () => {
    goToPrevStep();
  };

  return (
    <Form {...stepTwoForm}>
      <form
        onSubmit={stepTwoForm.handleSubmit(onSubmit)}
        className="bg-white p-3 rounded-lg shadow space-y-4 flex flex-col w-full"
      >
        <div className="w-full flex justify-between">
          <FormField
            name="time"
            control={stepTwoForm.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Time</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input {...field} type="time"/>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="date"
            control={stepTwoForm.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    type="date"
                    {...field}
                    value={
                      field.value
                        ? new Date(field.value).toISOString().split("T")[0]
                        : ""
                    }
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
          name="street1"
          control={stepTwoForm.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street 1</FormLabel>
              <FormMessage />
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="street2"
          control={stepTwoForm.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street 2</FormLabel>
              <FormMessage />
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="w-full gap-2 lg:gap-3 flex justify-between">
          <FormField
            name="city"
            control={stepTwoForm.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="pincode"
            control={stepTwoForm.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pincode</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="w-full gap-2 lg:gap-3 flex justify-between">
          <FormField
            name="state"
            control={stepTwoForm.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="nation"
            control={stepTwoForm.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nation</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="py-2 space-x-8 flex justify-between">
          <Button type="button" onClick={prevStep}>
            Prev
          </Button>
          <Button type="submit" className="bg-gradient-to-tr text-white from-orange-600 to-orange-400 active:text-white">Next</Button>
        </div>
      </form>
    </Form>
  );
};

export default Form2;
