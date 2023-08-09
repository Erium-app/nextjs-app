import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import { signJwtToken } from "@/library/jwt";
import bcrypt from 'bcrypt';
import prisma from "@/database/prismaConnect";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {
                username: {label: 'Email', type: 'text', placeholder: 'John Doe'},
                password: {label: 'Password', type: 'password'}
            },
            async authorize(credentials, req){
                const {email, password} = credentials

                console.log(email)
                console.log(password)

                const user = await prisma.user.findUnique({ where: { email } });

                console.log(user)
                if(!user){
                    throw new Error("Invalid input")
                }

                const comparePass = await bcrypt.compare(password, user.password)
                 console.log(comparePass)
                if(!comparePass){
                    throw new Error("Invalid input")
                } else {
                    console.log(user)
                    const { password, ...currentUser } = user;
                    console.log(currentUser);
                    const accessToken = signJwtToken(currentUser, {expiresIn: '6d'})
                    // const accessToken = signJwtToken(user, { expiresIn: '6d' });

                    return {
                        ...currentUser,
                        // ...user,
                        accessToken
                    }
                }
            }
        })
    ],
    pages: {
        signIn: '/login'
    },
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({token, user}){
            if(user){
                token.accessToken = user.accessToken
                token._id = user._id
            }
            console.log(token)
            return token
        },
        async session({session, token}){
            if(token){
                session.user._id = token._id
                session.user.accessToken = token.accessToken
            }

            console.log(session)
            return session
        }
    }
})

export {handler as GET, handler as POST}