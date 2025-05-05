"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  service: z.string(),
  date: z.string(),
  time: z.string(),
});

const AppointmentForm = () => {
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
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
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
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
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
                    <FormLabel>Service</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
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
              name="date"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
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
              name="time"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Time</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
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
