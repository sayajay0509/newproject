import React from "react";
import ListBar from "../list/ListBar";
import Registerpage from "./Registerpage";

function page() {
  return (
    <div>
      <ListBar title="Register" NameofButton="None" />
      <Registerpage />
    </div>
  );
}

export default page;
