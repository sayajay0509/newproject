import { Button } from "@/components/ui/button";
import React from "react";

function ListBar({ title, NameofButton }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <h1 className="text-lg font-semibold">{title}</h1>
      <Button variant="outline">{NameofButton}</Button>
    </header>
  );
}

export default ListBar;
