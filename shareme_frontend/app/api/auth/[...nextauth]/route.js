import NextAuth from "next-auth/next";
import Google from 'next-auth/providers/google';
import {client } from '@src/client';



const config = {
    providers : [
        Google({ clientId: process.env.AUTH_GOOGLE_ID, clientSecret: process.env.AUTH_GOOGLE_SECRET }),
    ],
    callbacks:{
        async session ({session}){
            //   console.log("Info about the session ");
            //   console.log(session);
              return session;
            },

        async signIn ({profile}){
          
            try {
                //Connect to DB and log the user in
                console.log(profile);

                // localStorage.setItem('user',JSON.stringify(profile));

                const {sub,name,picture} = profile;

                //Creating a new sanity user 
                 const doc = {
                    _id:sub,
                    _type:'user',
                    userName:name,
                    image:picture,
                 }

                 client.createIfNotExists(doc)
                 .then(()=>{
                    return true;
                }

                 )
                 return true;
            } catch (error) {
                console.log(error);
            }

            return true;
        }
    }
}

const handler = NextAuth(config);

export {handler as GET, handler as POST}