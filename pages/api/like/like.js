import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);

  if (req.method == "POST") {
    let db = (await connectDB).db("forum");
    let foundData = await db
      .collection("post")
      .findOne({
        _id: new ObjectId(req.body),
        whopressbutton: session.user.email,
      });
    if (!foundData) {
      await db.collection("post").updateOne(
        { _id: new ObjectId(req.body) },
        {
          $inc: { likeCount: 1 },
          $push: { whopressbutton: session.user.email },
        }
      );
    } else {
      res.redirect("/");
    }

    console.log(req.body);
  }
}
