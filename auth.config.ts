import type { NextAuthConfig } from 'next-auth';
export const authConfig: NextAuthConfig = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/login',
  },
  
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return true; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        
      }
      return true;
    },
    

    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    
    async session({ session, token }) {
      if(token.accessToken){
        
        session.user.accessToken = token.accessToken as string;
        session.user.name = token.name;
        
        return session;
      }
  
      return session
    },
  },
  providers: [
    
  ], 
};