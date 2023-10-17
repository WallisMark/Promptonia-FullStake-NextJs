import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';


// console.log({
//     clientId: process.env.GOOGLE_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRETE,

// })

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session}){

    },
    async signIn({ profile }){
        try {
            
        } catch (error) {
            
        }

    }
})

export {handler as Get, handler as Post}