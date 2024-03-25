import React from "react";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
function DefualtMainBody() {
  return (
    <div className="px-6 py-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Popular Post Title</CardTitle>
          <CardDescription>Posted by Popular User</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500 dark:text-gray-400">
            This is a popular post content. It highlights the most engaged posts
            by the community.
          </p>
          <div className="flex items-center justify-between mt-4">
            <Button className="group" size="sm" variant="ghost">
              <HeartIcon className="h-5 w-5 mr-2 group-hover:fill-red-500" />
              Like{"\n                          "}
            </Button>
            <Button size="sm" variant="ghost">
              <TextIcon className="h-5 w-5 mr-2" />
              Comment{"\n                          "}
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Latest Post Title</CardTitle>
          <CardDescription>Posted by New User</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500 dark:text-gray-400">
            This is the latest post content. It showcases the most recent
            contributions from our users.
          </p>
          <div className="flex items-center justify-between mt-4">
            <Button className="group" size="sm" variant="ghost">
              <HeartIcon className="h-5 w-5 mr-2 group-hover:fill-red-500" />
              Like{"\n                          "}
            </Button>
            <Button size="sm" variant="ghost">
              <TextIcon className="h-5 w-5 mr-2" />
              Comment{"\n                          "}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
function TextIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  );
}

export default DefualtMainBody;
