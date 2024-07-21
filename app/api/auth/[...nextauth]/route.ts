import NextAuth from "next-auth";
import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";


// const res = await fetch(ENDPOINT, {
//   method: "GET",
//   cache: "no-cache",
//   headers: headers(),
// });

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/auth/sign-in",
  },

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
