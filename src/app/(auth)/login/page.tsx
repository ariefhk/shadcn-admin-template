import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/components/login/login-form";

export default function LoginPage() {
  return (
    <div className="w-screen lg:grid overflow-x-hidden  h-screen  lg:grid-cols-2 ">
      <div className="hidden bg-muted lg:block relative">
        <Image
          src="https://picsum.photos/300/300?grayscale"
          alt="Image"
          fill
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>

      <div className="overflow-y-auto py-12 flex flex-col h-full lg:justify-center">
        <div className="mx-auto w-[350px] grid gap-4">
          <h1 className="text-3xl font-bold ">Login</h1>
          <LoginForm />
          <div className="mt-4 text-center text-sm">
            Belum punya akun ?{" "}
            <Link href="/register" className="underline">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
