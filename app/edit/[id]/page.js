import React from "react";

import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import ListBar from "@/app/list/ListBar";
import Editfile from "./Editfile";

export default async function page(props) {
  let db = (await connectDB).db("forum");
  let post_data = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params) });

  return (
    <div>
      <ListBar title="New Post" NameofButton="None" />
      <Editfile post_data={post_data} />
    </div>
  );
}
