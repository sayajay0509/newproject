import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  if (req.method == "POST") {
    console.log(req.body);
    let condition = [
      {
        $search: {
          index: "title_index",
          text: { query: req.body, path: "title" },
        },
      },
    ];
    let db = (await connectDB).db("forum");
    let result = await db.collection("post").aggregate(condition).toArray();
    console.log(result);
  }
  res.redirect(302, "/newpost");
}
