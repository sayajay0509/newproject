"use client";
import React from "react";
import ListBar from "../list/ListBar";
import Newpost from "./Newpost";

function page() {
  return (
    <div>
      <ListBar title="New Post" NameofButton="None" />
      <Newpost />
    </div>
  );
}

export default page;
