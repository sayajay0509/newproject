import ListBar from "@/app/list/ListBar";

import React from "react";
import Detailpage from "./Detailpage";

function page() {
  return (
    <div>
      <ListBar title="User Community" NameofButton="Edit" />
      <Detailpage />
    </div>
  );
}

export default page;
