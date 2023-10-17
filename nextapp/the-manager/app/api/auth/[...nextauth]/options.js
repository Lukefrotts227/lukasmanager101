import GitHubProvider from "next-auth/providers/github";
import { AuthOptions } from "next-auth";

export const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    })
  ]
};