'use server';
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { z } from "zod";



export type User = {
  email: string;
  password: string;
};



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
            const data = await user.json();
            if (data.success){
                return data.data;
            }
            return null;
          } catch (error) {
             return null; 
          }
      },
    }),
  ],
});
