import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  if (req.method == "DELETE") {
    console.log(req.body);
    let session = await getServerSession(req, res, authOptions);
    let db = (await connectDB).db("forum");
    let foundData = await db
      .collection("post")
      .findOne({ _id: new ObjectId(req.body) });
    if (!session) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    if (
      session.user.email === foundData.useremail ||
      session.user.email === "theweeknd982@gmail.com"
    ) {
      await db.collection("post").deleteOne({ _id: new ObjectId(req.body) });
      res.redirect("/list/1");
    }
  }
}
