import { DefaultUser } from "next-auth/core/types";

declare module "next-auth" {
  /**
   * Extend the built-in user interface
   */
  interface User extends DefaultUser {
    accessToken?: string;
  }

  /**
   * Extend the built-in sessions interface
   */
  interface session extends DefaultSession {
    accessToken?: string ;
  }
}