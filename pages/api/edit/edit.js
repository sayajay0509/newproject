import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "POST") {
    console.log(req.body);
    let changeData = {
      title: req.body.title,
      content: req.body.content,
    };
    let db = (await connectDB).db("forum");
    let update_data = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(req.body._id) }, { $set: changeData });
    console.log(update_data);
  }
  res.redirect("/list/1");
}
