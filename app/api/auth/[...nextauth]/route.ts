import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const handler = {
  // Configure one or more authentication providers
  providers: [],
};

export {handler as GET, handler as POST};
