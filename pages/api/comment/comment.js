import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  let currentDate = new Date();
  if (req.method == "POST") {
    let db = (await connectDB).db("forum");
    req.body = JSON.parse(req.body);

    let CommentData = {
      content: req.body.comment,
      parent: new ObjectId(req.body.parent),
      author: req.body.session.user.name,
      publishDate: currentDate,
      likeCount: 0,
    };
    await db.collection("comment").insertOne(CommentData);
    console.log("Save Data: " + CommentData);
    res.redirect(302, `/detail/${req.body.parent}`);
  }
}
