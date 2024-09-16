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
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zodResolver } from "@hookform/resolvers/zod";
import { Ticket } from "@prisma/client";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const formSchema = z.object({
  class: z.string().min(1),
  specification: z.string(),
  price: z.preprocess((val) => parseFloat(val as string), z.number()),
  totalSlot: z.preprocess((val) => parseInt(val as string), z.number()),
  eventId: z.string(),
});

type TicketFormValues = z.infer<typeof formSchema>;

interface TicketFormProps {
  initialData: Ticket | null;
  handleModel: () => void;
}

export const TicketForm: React.FC<TicketFormProps> = ({
  handleModel,
  initialData,
}) => {
  console.log(initialData);
  const ticketId = initialData?.id;

  const params = useParams();
  const router = useRouter();
  console.log(params.eventId, "eventId");

  const [loading, setLoading] = useState(false);

  const title = initialData ? "Edit Ticket" : "Create Ticket";
  const description = initialData ? "Edit a ticket." : "Add a new ticket";
  const toastMessage = initialData ? "Ticket updated." : "Ticket created";
  const action = initialData ? "Save changes" : "Create";

  const defaultValues = initialData
    ? {
        ...initialData,
        price: parseFloat(String(initialData?.price)),
        totalSlot: parseInt(String(initialData?.totalSlot)),
      }
    : {
        class: "",
        price: 0,
        specification: "",
        totalSlot: 0,
        eventId: "",
      };

  const form = useForm<TicketFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: TicketFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        console.log("hi", data);
        await axios.put(
          `/api/event/${params.eventId}/ticket/${ticketId}`,
          data
        );
      } else {
        console.log(data);
        await axios.post(`/api/event/${params.eventId}/ticket`, data);
      }

      router.refresh();
      handleModel();
      toast.success(toastMessage);
    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);

      router.refresh();
      router.push(`/`);
      toast.success("Ticket deleted.");
    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-[100vw] h-[100vh] fixed inset-0 flex justify-center items-center backdrop-filter bg-gray-800 opacity-95 z-10">
        <div className="w-[45%] min-w-[300px] max-w-[550px] h-auto border-box fixed top-[17%] bg-white opacity-150 p-3 md:p-5 xl:p-10 lg:p-8 rounded-xl">
          <div className="relative flex flex-col pb-1 border-b border-gray-300 gap-2">
            <div className="w-full flex flex-row justify-end">
              <button onClick={handleModel} className="text-3xl cursor-pointer">
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
            </div>
            <h2 className="text-xl text-left font-bold font-sans">{title}</h2>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full"
            >
              <div className="flex flex-col gap-1 md:gap-3">
                <FormField
                  control={form.control}
                  name="class"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Class</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Ticket Type"
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
                  name="specification"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Specification</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Ticket Specification"
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
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Ticket Cost"
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
                  name="totalSlot"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Total Slot</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Total Slots"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <button type="submit" disabled={loading} className="btn-primary">
                {action}
              </button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};
