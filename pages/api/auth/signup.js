import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const hash = await bcrypt.hash(req.body.user_password, 10);
    req.body.user_password = hash;

    let db = (await connectDB).db("forum");
    await db.collection("user_cred").insertOne(req.body);
    res.status(200).json("성공");
  }
}
