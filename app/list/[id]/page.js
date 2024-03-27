import { connectDB } from "@/util/database";
import { Link } from "lucide-react";
import ListItem from "../ListItem";
import React from "react";
import ListBar from "../ListBar";
import PaginationSoft from "@/app/list/PaginationSoft";

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

  let pages = Array.from({ length: totalPage }, (_, i) => i + 1);

  return (
    <div>
      <ListBar title="User Community" nameofButton="New Post" />
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
