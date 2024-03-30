import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  let currentDate = new Date();
  if (req.method == "POST") {
    console.log("안뜬다고씨발련아" + JSON.stringify(req.body));
    let db = (await connectDB).db("forum");
    let CommentData = {
      replycontent: req.body.replyComment,
      replyparent: new ObjectId(req.body.replyparent),
      replyauthor: req.body.session.user.name,
      replypublishDate: currentDate,
    };
    await db
      .collection("comment")
      .updateOne(
        { _id: new ObjectId(req.body.replyparent) },
        { $push: { replies: CommentData } }
      );

    res.redirect(302, "/");
  }
}
