import React from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  Card,
} from "@/components/ui/card";

import Link from "next/link";
import getRelativeTime from "@/util/SetTime";
export default function Chatlist({ chatlist_data }) {
  return (
    <div className="px-6 py-4 space-y-4">
      {chatlist_data.map((chat, index) => (
        <Link href={`/chat/${chat._id}`} key={index}>
          <Card>
            <CardHeader>
              <CardTitle className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
                <span>{chat.chatlistname}</span>
                <div className="flex items-center gap-2">
                  <span>{getRelativeTime(new Date(chat.publishDate))}</span>
                </div>
              </CardTitle>
              <CardDescription>{chat.createuser}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
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
