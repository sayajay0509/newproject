"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Modal({ isOpen, onClose, children, chatRoomName }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded max-w-sm w-full">
        {children}
        <Button
          onClick={() => {
            fetch("/api/chatlist/chatlist", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(chatRoomName),
            }).then(() => {
              onClose(); // 요청 완료 후 모달 닫기
            });
          }}
          className="mr-2 mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-black"
        >
          Create
        </Button>
        <Button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-black"
        >
          닫기
        </Button>
      </div>
    </div>
  );
}

export default function ChatlistBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chatRoomName, setChatRoomName] = useState("");

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <h1 className="text-lg font-semibold">채팅목록</h1>

      <Button variant="outline" onClick={handleOpenModal}>
        Create ChatRoom
      </Button>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        chatRoomName={chatRoomName}
      >
        <div className="flex flex-col items-start">
          <label htmlFor="chatRoomName" className="mb-2 font-semibold">
            채팅방 이름
          </label>
          <Input
            type="text"
            id="chatRoomName"
            onChange={(e) => setChatRoomName(e.target.value)}
            className="px-4 py-2 border rounded w-full"
          />
          {/* 여기에 추가적인 모달 내용을 넣을 수 있습니다 */}
        </div>
      </Modal>
    </header>
  );
}
