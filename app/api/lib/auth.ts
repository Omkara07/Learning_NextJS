import CredentialsProvider from "next-auth/providers/credentials";
import { prisma as client } from "@/db"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

// to get the id on the server components as well by using the UseServerSession
export const NEXT_AUTH_CONFIG = {
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Email" },
                password: { label: "Password", type: "password", placeholder: "Password" },
            },
            async authorize(credentials: any): Promise<any> {
                if (!credentials) return null
                const { username, password } = credentials
                try {

                    const user = await client.user.findUnique({
                        where: {
                            username: username
                        }
                    })
                    if (!user) {
                        return null
                    }
                    return {
                        id: user?.id,
                        email: user.username,
                        name: user.fullname
                    };
                }
                catch (e) {
                    console.log(e);
                    return null
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
        })

    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        // used check and change the jwt send to the frontend (mostly used for printing the jwt)
        // jwt: ({ token, user }) => {
        //     token.userId = token.sub

        //     return token
        // },

        // used to check and change the session sent to the frontend
        session: ({ user, token, session }: any) => {
            if (session && session.user) {
                session.user.id = token.sub
            }
            console.log(session)

            return session
        }
    },
    pages: {
        signIn: "/signin"
    }
}