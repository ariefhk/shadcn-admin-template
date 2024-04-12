import Image from "next/image";
import Link from "next/link";

import RegisterForm from "@/components/register/register-form";

export default function RegisterPage() {
  return (
    <div className="w-screen lg:grid overflow-hidden  h-screen  lg:grid-cols-2 ">
      <div className="hidden bg-muted lg:block  sticky">
        <Image
          src="https://picsum.photos/300/300?grayscale"
          alt="Image"
          fill
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>

      <div className="overflow-y-auto py-12 flex flex-col h-full lg:justify-center">
        <div className="mx-auto w-[350px] grid gap-4">
          <h1 className="text-3xl font-bold ">Register</h1>
          <RegisterForm />
          <div className="mt-4 text-center text-sm">
            Sudah punya akun?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
