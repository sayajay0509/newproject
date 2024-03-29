import { connectDB } from "@/util/database";
import { Link } from "lucide-react";
import ListItem from "../ListItem";
import React from "react";
import ListBar from "../ListBar";
import PaginationSoft from "@/app/list/PaginationSoft";
import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import getRelativeTime from "@/util/SetTime";

export default async function page(props) {
  let db = (await connectDB).db("forum");
  let post_data = await db
    .collection("post")
    .find()
    .skip((props.params.id - 1) * 2)
    .limit(4)
    .toArray();
  let numberOfpost = await db.collection("post").countDocuments();
  let countsPerPage = 4;
  let totalPage = Math.ceil(numberOfpost / countsPerPage);
  let session = await getServerSession(authOptions);

  let pages = Array.from({ length: totalPage }, (_, i) => i + 1);

  return (
    <div>
      <ListBar
        title="User Community"
        NameofButton="New Post"
        session={session}
      />
      <ListItem
        numberofpost={numberOfpost}
        countsPerPage={countsPerPage}
        totalPage={totalPage}
        post_data={post_data}
      />
      <PaginationSoft pages={pages} props={props} />
    </div>
  );
}
