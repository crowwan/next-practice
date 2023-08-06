import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
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
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
