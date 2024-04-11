import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { serverApiInstance } from "@/networks/server-api-instance";
import { AxiosError } from "axios";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "login",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "user@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await serverApiInstance.post("/login", {
            email: credentials?.email,
            password: credentials?.password,
          });

          const userData = {
            id: response?.data.data?.user?.id,
            name: response?.data.data?.user?.name,
            email: response?.data.data?.user?.email,
            token: response?.data.data?.authorization?.token,
          };

          return userData;
        } catch (error) {
          if (error instanceof AxiosError) {
            console.log("AXIOS ERR IN AUTH OPTIONS: ", error);
            throw error;
          }
          throw error;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export { authOptions };
