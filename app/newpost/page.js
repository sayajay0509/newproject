import React from "react";
import ListBar from "../list/ListBar";
import Newpost from "./Newpost";

export default async function page() {
  return (
    <div>
      <ListBar title="New Post" NameofButton="None" />
      <Newpost />
    </div>
  );
}
