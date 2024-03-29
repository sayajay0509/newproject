import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function DefaultTopBar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <h1 className="text-lg font-semibold">Latest & Popular Posts</h1>

      <Button variant="outline">New Post</Button>
    </header>
  );
}

export default DefaultTopBar;
