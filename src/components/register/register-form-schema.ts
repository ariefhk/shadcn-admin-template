import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z.string().min(2, { message: "Nama harus diisi!" }),
    email: z.string().email({ message: "format email harus diisi dengan benar!" }),
    password: z.string().min(2, { message: "Password harus diisi!" }),
    confirmPassword: z.string().min(2, { message: "Konfirmasi Password harus diisi!" }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Konfirmasi password harus sama!",
        path: ["confirmPassword"], // path of error
      });
    }
  });

// registerFormSchema.parse({
//   name: "arief",
//   email: "arief",
//   password: "arief",
//   confirmPassword: "arief1",
// });
