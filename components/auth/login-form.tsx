"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchemas } from "@/schemas";
import {
  Form,
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { CardWrapper } from "./card-wrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login } from "@/actions/login";
import { useState, useTransition } from "react";
import { FromError } from "./form-error";
import { FromSuccess } from "./form-success";

const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof loginSchemas>>({
    resolver: zodResolver(loginSchemas),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchemas>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      login(values).then((data) => {
        console.log(data)
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };
  console.log({success, error})
  return (
    <CardWrapper
      backButtonHref="/auth/register"
      backButtonLabel="Did not have an account"
      headerLabel="Welcome back"
      showSocial
    >
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return (
                  <FormItem className="flex flex-col justify-start items-start gap-2">
                    <FormLabel className="text-left w-full">Email</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        {...field}
                        type="email"
                        placeholder="john.deoexapmle@gmail.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => {
                return (
                  <FormItem className="flex flex-col justify-start items-start gap-2">
                    <FormLabel className="text-left w-full">Password</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        {...field}
                        type="password"
                        placeholder="*****"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FromError massage={error || ""} />
            <FromSuccess massage={success || ""} />
            <Button
              disabled={isPending}
              type="submit"
              className="w-full"
              size={"lg"}
            >
              Login
            </Button>
          </div>
        </form>
      </Form>{" "}
    </CardWrapper>
  );
};

export default LoginForm;
