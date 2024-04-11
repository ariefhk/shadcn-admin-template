"use client";

import { useSession } from "next-auth/react";

const useClientSession = () => {
  const { data, status } = useSession();
  const user = data?.user;

  return {
    user,
    status,
  };
};

export default useClientSession;
