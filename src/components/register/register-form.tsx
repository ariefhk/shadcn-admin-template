"use client";

import { registerFormType, registerFormSchema } from "./register-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "../common/password-input";

const RegisterForm = () => {
  const {
    formState: { isSubmitting, errors, ...formState },
    watch,
    reset,
    getValues,
    setValue,
    ...form
  } = useForm<registerFormType>({
    resolver: zodResolver(registerFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: registerFormType) {
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama</FormLabel>
              <FormControl>
                <Input placeholder="Masukan nama" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="Masukan Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Konfirmasi Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="Masukan Konfirmasi Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Daftar
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
