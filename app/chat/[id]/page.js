import React from "react";
import ChatDetail from "./ChatDetail";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function page(props) {
  let db = (await connectDB).db("forum");
  let chatlist_data = await db
    .collection("chatlist")
    .find({ _id: new ObjectId(props.params) })
    .toArray();
  let parentId = props.params.id;
  let chat_data = await db
    .collection("chat")
    .find({ parent: new ObjectId(props.params) })
    .toArray();

  let session = await getServerSession(authOptions);

  return (
    <div>
      <ChatDetail
        chat_data={chat_data}
        chatlist_data={chatlist_data}
        parentId={parentId}
        session={session}
      />
    </div>
  );
}
