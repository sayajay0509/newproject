import { connectDB } from "@/util/database";

import React from "react";
import ListBar from "./ListBar";
import ListItem from "./ListItem";

import PaginationSoft from "./PaginationSoft";

export default async function page(props) {
  let db = (await connectDB).db("forum");
  let post_data = await db.collection("post").find().toArray();

  return (
    <div>
      <ListBar />
      <ListItem post_data={post_data} />
      <PaginationSoft />
    </div>
  );
}
