import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.NODE_VALUE_GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.NODE_VALUE_GITHUB_SECRET ?? "",
    }),
  ],
  secret: "test1234",
};
export default NextAuth(authOptions);
