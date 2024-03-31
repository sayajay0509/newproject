import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);
  let currentDate = new Date();

  if (req.method == "POST") {
    let db = (await connectDB).db("forum");

    let SaveData = {
      title: req.body.title,
      content: req.body.content,
      useremail: session.user.email,
      username: session.user.name,
      publishDate: currentDate,
      likeCount: 0,
    };
    console.log(SaveData);
    console.log("Hi: " + SaveData.publishDate);
    db.collection("post").insertOne(SaveData);
  }
  res.redirect(302, "/newpost");
}
