import Google from "next-auth/providers/google";
import GitHubProvider from 'next-auth/providers/github'

export const options = {
    pages : {
        signIn:'/',
        newUser:'/home'
    },
    providers: [
        Google({
          clientId: process.env.AUTH_GOOGLE_ID,
          clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
        GitHubProvider({
          clientId: process.env.AUTH_GITHUB_ID,
          clientSecret: process.env.AUTH_GITHUB_SECRET,
        }),
      ],
      callbacks: {
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`;
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url;
            return baseUrl;
          },
        
        async session({ session, user }) {
          //   console.log("Info about the session ");
          //   console.log(session);
          session.user = user;
          return session;
        },
    
        async signIn({ profile }) {
          try {
            //Connect to DB and log the user in
            console.log(profile);
    
            const { sub, name, picture } = profile;
    
            //Creating a new sanity user
            const doc = {
              _id: sub,
              _type: "user",
              userName: name,
              image: picture,
            };
    
            await client.createIfNotExists(doc);
    
            return true;
          } catch (error) {
            console.log(error);
          }
    
          return true;
        },
      },
}