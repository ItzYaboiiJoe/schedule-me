"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useState } from "react";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  service: z.string({ required_error: "Please select a service" }),
  date: z.date({ required_error: "Please select a date for the service" }),
  time: z.string({ required_error: "Please select a time for the service" }),
});

const AppointmentForm = ({ closeDialog }: { closeDialog: () => void }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function handleSubmit() {
    console.log("Form submitted with data:");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="block text-iconColor text-md">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="border border-gray-300 mt-1"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="block text-iconColor text-md">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="border border-gray-300 mt-1"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="block text-iconColor text-md">
                      Phone
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="border border-gray-300 mt-1"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="block text-iconColor text-md mb-1">
                      Service
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a Service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="service1">Service 1</SelectItem>
                        <SelectItem value="service2">Service 2</SelectItem>
                        <SelectItem value="service3">Service 3</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="block text-iconColor text-md mb-1">
                      Date
                    </FormLabel>
                    <Popover
                      modal={true}
                      open={popoverOpen}
                      onOpenChange={setPopoverOpen}
                    >
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={(date) => {
                            field.onChange(date);
                            setPopoverOpen(false);
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="block text-iconColor text-md mb-1">
                      Time
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a Time" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="time1">Time 1</SelectItem>
                        <SelectItem value="time2">Time 2</SelectItem>
                        <SelectItem value="time3">Time 3</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-700 shadow-xl"
            onClick={closeDialog}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded hover:bg-[#1e6f65] shadow-xl"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AppointmentForm;
