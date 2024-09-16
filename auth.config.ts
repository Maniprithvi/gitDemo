import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { LoginSchema } from "./lib/schema";
import { getUserByEmail } from "./data/user";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log(credentials,"cred")
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          const user = await getUserByEmail(email);

          if (!user || !user.password) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);
  if(!passwordsMatch){
    throw new Error("password is not matched")
  }
          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
      profile(profile) {
        console.log({ profile }, "g pro");
        return {
          role: "USER",
          name: profile.name,
          email: profile.email,
          image: profile.image,
          emailVerified: profile.email_verified,
        };
      },
    }),
  ],

  secret: process.env.AUTH_SECRET,
  // debug: true,
} satisfies NextAuthConfig;
