import {
  DefaultSession,
  NextAuthOptions,
  User as NextAuthUser,
  getServerSession,
} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { db } from "./db";
import { verify } from "argon2";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: number;
      email: string;
      name: string;
      // ...other properties
      // role: UserRole;
    };
  }
  interface User {
    id: number;
    email: string;
    name: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: number;
    email: string;
    name: string;
  }
}

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const parsed = LoginSchema.safeParse(credentials);
        if (!parsed.success) {
          return null;
        }
        const user = await db.user.findFirst({
          where: { email: parsed.data.email },
        });
        if (!user) {
          return null;
        }
        const isValid = await verify(user.passwordHash, parsed.data.password);
        if (!isValid) {
          return null;
        }
        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      user = user as NextAuthUser;
      if (user) {
        return { id: user.id, email: user.email, name: user.name };
      }
      return token;
    },
    session({ session, token }) {
      session.user = { id: token.id, email: token.email, name: token.name };
      return session;
    },
  },
} satisfies NextAuthOptions;

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
