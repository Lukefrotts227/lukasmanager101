import { PrismaAdapter } from "@auth/fauna-adapter";
import GithubProvider from "next-auth/providers/github";
import client from "../prisma/prisma";

const authOptions = {
    providers:[
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
    ],
    adapter: PrismaAdapter({ faunaClient: client }),
    callbacks: {
        async redirect({ baseUrl }){
            return `${baseUrl}/profile`;
        },
        async jwt({ token, user }) {
            if (user) {
                token.userId = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            session.userId = token.userId;
            return session;
        }
    }, 
    secret: process.env.NEXTAUTH_SECRET, 
    session: {
        strategy:"jwt",
    },
    jwt: {},
}
export default authOptions;