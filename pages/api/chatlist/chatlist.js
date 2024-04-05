import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  let currentDate = new Date();
  if (req.method == "POST") {
    let db = (await connectDB).db("forum");
    let documentdata = {
      chatlistname: req.body,
      createuser: session.user.name,
      publishDate: currentDate,
    };
    db.collection("chatlist").insertOne(documentdata);
    res.redirect("/");
  }
}
