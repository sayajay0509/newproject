import NextAuth from "next-auth";
import { connectDB } from "@/util/database";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: "qwer12",
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
