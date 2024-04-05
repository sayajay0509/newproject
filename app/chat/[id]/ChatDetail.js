"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import getRelativeTime from "@/util/SetTime";

export default function ChatDetail({
  chat_data,
  parentId,
  chatlist_data,
  session,
}) {
  let [inputValue, setinputValue] = useState("");
  return (
    <div>
      <main className="flex-1 overflow-y-auto">
        <header className="flex items-center justify-between px-6 py-4 border-b">
          <h1 className="text-lg font-semibold">Chat Room</h1>
          <div className="flex items-center space-x-2">
            <Input
              className="w-64"
              placeholder="Search chats..."
              type="search"
            />
            <Button variant="outline">New Chat</Button>
          </div>
        </header>
        <div className="px-6 py-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{chatlist_data[0].chatlistname}</CardTitle>
              <CardDescription>Started by User Name</CardDescription>
            </CardHeader>
            <CardContent>
              {chat_data.map((chat, index) =>
                session?.user?.name === chat.participation_users ? (
                  // Render messages from the current user on the right
                  <div
                    key={index}
                    className="flex flex-col bg-white dark:bg-gray-800 p-4 rounded-lg shadow my-2 self-end text-right"
                  >
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      {getRelativeTime(new Date(chat.publishDate))}
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      {chat.content}
                    </p>
                  </div>
                ) : (
                  // Render messages from other users on the left
                  <div
                    key={index}
                    className="flex flex-col bg-white dark:bg-gray-800 p-4 rounded-lg shadow my-2"
                  >
                    <div className="flex items-center mb-2">
                      <Avatar className="w-10 h-10 border">
                        <AvatarImage alt={``} src="/placeholder-user.jpg" />
                        <AvatarFallback>User</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <div className="font-semibold">
                          {chat.participation_users}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {getRelativeTime(new Date(chat.publishDate))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      {chat.content}
                    </p>
                  </div>
                )
              )}
            </CardContent>
            <CardFooter>
              <Textarea
                onChange={(e) => {
                  setinputValue(e.target.value);
                }}
                placeholder="Write a message..."
              />
              <Button
                onClick={() => {
                  fetch("/api/chat/chat", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      content: inputValue,
                      parent: parentId,
                    }),
                  })
                    .then((res) => {
                      if (res.ok) {
                        window.location.href = `/chat/${parentId}`;
                      } else {
                        throw new Error("Error in post");
                      }
                    })
                    .catch((error) => {
                      console.error("Error:", error);
                    });
                }}
                className="mt-2"
              >
                Send Message
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
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
