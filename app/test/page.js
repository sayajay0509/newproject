"use client";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

function Page() {
  let [input, setInput] = useState("");
  // 소켓 연결 상태 관리
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // 소켓 연결 초기화
    const newSocket = io("http://localhost:3000");
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  // 메시지 수신 이벤트 리스너 설정
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

  // 메시지 송신 함수
  const sendMessage = (message) => {
    if (socket) {
      socket.emit("message", message);
      setInput("");
    }
  };

  return (
    <div>
      <h1>Socket.IO 클라이언트</h1>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
      ></input>
      <button onClick={() => sendMessage(input)}>Send Message</button>
    </div>
  );
}

export default Page;
