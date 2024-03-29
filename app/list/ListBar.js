"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function ListBar({ title, NameofButton, session }) {
  console.log(session);
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <h1 className="text-lg font-semibold">{title}</h1>
      {session ? (
        <Link href="/newpost">
          <Button variant="outline">{NameofButton}</Button>
        </Link>
      ) : (
        <Button variant="outline" disabled>
          {NameofButton}
        </Button>
      )}
    </header>
  );
}

export default ListBar;
