import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email({ message: "format email harus diisi dengan benar!" }),
  password: z.string().min(2, { message: "Password harus diisi!" }),
});

export type loginFormType = z.infer<typeof loginFormSchema>;
