import { getServerSession } from "next-auth/next";
import { authOptions } from "./next-auth-options";
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";

export async function getServerCurrentUser(
  ...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []
) {
  const session = await getServerSession(...args, authOptions);

  return session?.user;
}
