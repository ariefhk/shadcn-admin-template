"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginFormSchema, loginFormType } from "./login-form-schema";
import Link from "next/link";
import { PasswordInput } from "../common/password-input";

const LoginForm = () => {
  const {
    formState: { isSubmitting, errors, ...formState },
    watch,
    reset,
    getValues,
    setValue,
    ...form
  } = useForm<loginFormType>({
    resolver: zodResolver(loginFormSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: loginFormType) {
    console.log(values);
  }

  return (
    <Form
      formState={{ errors, isSubmitting, ...formState }}
      watch={watch}
      reset={reset}
      getValues={getValues}
      setValue={setValue}
      {...form}
    >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="m@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center">
                <FormLabel>Password</FormLabel>
                <Link href="/forgot-password" className="ml-auto inline-block text-sm underline">
                  Lupa password ?
                </Link>
              </div>
              <FormControl>
                <PasswordInput placeholder="Masukan Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
