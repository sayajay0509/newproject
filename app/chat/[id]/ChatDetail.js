"use client";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
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
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState(chat_data);
  let publishDate = new Date();

  useEffect(() => {
    // 소켓 연결 초기화
    const newSocket = io("http://localhost:3000");
    setSocket(newSocket);
    newSocket.on("message", (newMessage) => {
      // 새 메시지를 messages 상태에 추가합니다.
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);
  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        console.log("Connected to server");
      });

      socket.on("message", (message) => {
        console.log("Message received: ", message);
      });
    }
  }, [socket]);
  const sendMessage = (message) => {
    if (socket) {
      socket.emit("message", { message, session, parentId, publishDate });
      setinputValue("");
    }
  };
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
              {messages.map((chat, index) =>
                session?.user?.name === chat.session?.user?.name ||
                session?.user?.name === chat.participation_users ? (
                  // 현재 사용자의 메시지
                  <div
                    key={index}
                    className="flex flex-col items-end my-2 max-w-3/4 self-end"
                  >
                    <div className="text-xs text-gray-500 mb-1">
                      {getRelativeTime(new Date(chat.publishDate))}
                    </div>
                    <div className="bg-blue-500 text-white p-1 rounded-lg rounded-br-none">
                      <p className="mb-4">{chat.message || chat.content}</p>
                    </div>
                  </div>
                ) : (
                  // 다른 사용자의 메시지
                  <div
                    key={index}
                    className="flex flex-col items-start my-2 max-w-3/4 self-start"
                  >
                    <div className="flex items-center mb-2">
                      <Avatar className="w-10 h-10 border-2 border-gray-300">
                        <AvatarImage alt={``} src="/placeholder-user.jpg" />
                        <AvatarFallback>User</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <div className="font-semibold">
                          {chat.participation_users || session?.user?.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {getRelativeTime(new Date(chat.publishDate))}
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-500 text-white p-1 rounded-lg rounded-bl-none">
                      <p className="mb-4">{chat.content || chat.message}</p>
                    </div>
                  </div>
                )
              )}
            </CardContent>

            <CardFooter>
              <Textarea
                value={inputValue}
                onChange={(e) => {
                  setinputValue(e.target.value);
                }}
                placeholder="Write a message..."
              />
              <Button onClick={() => sendMessage(inputValue)} className="mt-2">
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
