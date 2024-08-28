"use server";

import { signIn } from "/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";


// ...

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    console.log(formData);
    
    return await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirectTo: "/",
      
    });
  } catch (error) {
    if (error instanceof AuthError) {
      console.log(error);
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
export async function addN(prevState: string | undefined, formData: FormData) {
  return [1, 2, 3];
}
