import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  let currentDate = new Date();
  if (req.method == "POST") {
    if (session) {
      let db = (await connectDB).db("forum");
      let chat_data = {
        content: req.body.content,
        participation_users: session.user.name,
        participation_users_id: session.user.email,
        parent: new ObjectId(req.body.parent),
        publishDate: currentDate,
      };

      await db.collection("chat").insertOne(chat_data);

      res.status(307).setHeader("Location", `/chat/${req.body.parent}`); // 307 상태 코드로 리디렉션
      return res.end();
    }
  } else {
    res
      .status(307)
      .setHeader(
        "Location",
        "/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F"
      ); // 307 상태 코드로 리디렉션
    return res.end();
  }
}
