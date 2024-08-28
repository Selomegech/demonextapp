'use server'

import { sign } from "crypto"
import { signOut } from "./auth";

export default async function logOut() {
   await signOut();
}