import React from "react";
import { connectDB } from "@/util/database";
import ChatlistBar from "./ChatlistBar";
import Chatlist from "./Chatlist";

export default async function page() {
  let db = (await connectDB).db("forum");
  let chatlist_data = await db.collection("chatlist").find().toArray();

  return (
    <div>
      <ChatlistBar />
      <Chatlist chatlist_data={chatlist_data} />
    </div>
  );
}
