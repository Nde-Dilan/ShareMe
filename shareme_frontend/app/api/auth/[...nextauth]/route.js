import NextAuth from "next-auth";
import { client } from "@src/client";
import { options } from "./options";

const config = options;

const handler = NextAuth(config);

export { handler as GET, handler as POST };
