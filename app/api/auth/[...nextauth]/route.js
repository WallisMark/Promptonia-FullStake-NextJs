import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import{ connectToDB } from '@utils/database'

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
            await connectToDB();

            //check is a user already exist 

            // if not, create a new user 

            return true;

        } catch (error) {

            console.log(error)

            return false;
            
        }

    }
})

export {handler as Get, handler as Post}