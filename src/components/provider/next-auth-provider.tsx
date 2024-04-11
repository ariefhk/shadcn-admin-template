"use client";

import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

const NextAuthProvider = ({ children }: Readonly<Props>) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;
