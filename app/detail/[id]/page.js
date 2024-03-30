import ListBar from "@/app/list/ListBar";

import React from "react";
import Detailpage from "./Detailpage";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function page(props) {
  let db = (await connectDB).db("forum");
  let post_data = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params) });
  let comment_data = await db
    .collection("comment")
    .find({ parent: new ObjectId(props.params) })
    .toArray();

  let session = await getServerSession(authOptions);

  return (
    <div>
      <ListBar title="User Community" NameofButton="New Post" />
      <Detailpage
        session={session}
        props={props}
        post_data={post_data}
        comment_data={comment_data}
      />
    </div>
  );
}
