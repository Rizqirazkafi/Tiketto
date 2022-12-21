import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../helpers/prisma";

export const authOptions = {
  pages: {
    newUser: "/register",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (
            credentials?.email === undefined ||
            credentials?.password === undefined
          )
            throw new Error("Invalid credentials");

          const user = await prisma.user.findUniqueOrThrow({
            where: {
              email: credentials.email,
            },
          });

          const passwordIsCorrect = user.password === credentials.password;

          if (!passwordIsCorrect) throw new Error("Invalid credentials");

          return {
            id: user.id,
            email: user.email,
          } as any;
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
