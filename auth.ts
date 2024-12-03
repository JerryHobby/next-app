import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./prisma/client"
import bcrypt from "bcryptjs"

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        password: { label: "Password", type: "password", placeholder: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password)
          return null;
        
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email as string
          },
        });

        if (!user) return null;
        if (!user.hashedPassword) return null;

        const passwordMatch = await bcrypt.compare(
          credentials.password as string,
          user.hashedPassword as string);

        return passwordMatch ? { id: user.id, email: user.email } : null;
      },
    }),
    
    Google],
})
