import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import{ connectToDB } from '@utils/database'
import User from "@models/user";

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

        const sessionUser = await User.findone({
            email: session.user.email
        })

        ServerSession.user.id = sessionUser._id.toString();

        return session;

    },
    async signIn({ profile }){
        try {
            await connectToDB();

            //check is a user already exist 

            const userExist = await User.findone({
              email: profile.email  
            });

            // if not, create a new user 

            if(!userExist){
                await User.create({
                    email:profile.email,
                    username: profile.name.replace( " ","").toLowercase(),
                    image: profile.picture
                })
            }


            return true;

        } catch (error) {

            console.log(error)

            return false;
            
        }

    }
})

export {handler as Get, handler as Post}