'use server';
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";



export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          const user = await fetch("https://akil-backend.onrender.com/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify(credentials),
          });
          const res = await user.json();

          console.log(res, "data returned from the backend");
          if (res.success && res.data) {
            return res.data;
          }
          return null;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
});