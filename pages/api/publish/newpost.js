import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method == "POST") {
    let db = (await connectDB).db("forum");
    let Data = db.collection("post").insertOne(req.body);
    console.log("Title: " + req.body.title);
    console.log("Content: " + req.body.content);
  }
  res.redirect(302, "/newpost");
}


