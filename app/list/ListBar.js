"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { useState } from "react";

function ListBar({ title, NameofButton, session }) {
  const [inputValue, setInputValue] = useState("");
  // const router = useRouter();

  // const handleSearch = () => {
  //   // 검색 실행 로직, 예를 들어 라우터를 이용한 페이지 이동
  //   router.push(`/search?val${inputValue}`);
  // };

  // const handleKeyPress = (event) => {
  //   if (event.key === "Enter") {
  //     handleSearch();
  //   }
  // };

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <h1 className="text-lg font-semibold">{title}</h1>

      <Input
        onChange={(e) => {
          let value = e.target.value;
          setInputValue(value);
        }}
        className="w-64"
        placeholder="Search posts and press Enter key"
        type="search"
        value={inputValue}
      />
      <Button
        variant="outline"
        onClick={() => {
          fetch("/api/search/search", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(inputValue),
          });
        }}
      >
        Search
      </Button>

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
