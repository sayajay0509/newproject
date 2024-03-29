import React from "react";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
export default function Comment() {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-4">
        <Avatar className="w-10 h-10 border">
          <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
        <div className="grid gap-1.5">
          <div className="flex items-center gap-2">
            <div className="font-semibold">@JohnDoe</div>
            <div className="text-gray-500 text-xs dark:text-gray-400">
              5 minutes ago
            </div>
          </div>
          <div>Great post! I found it very informative.</div>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <Avatar className="w-10 h-10 border">
          <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
        <div className="grid gap-1.5">
          <div className="flex items-center gap-2">
            <div className="font-semibold">@JaneDoe</div>
            <div className="text-gray-500 text-xs dark:text-gray-400">
              10 minutes ago
            </div>
          </div>
          <div>Thanks for sharing this post. It was really helpful.</div>
        </div>
      </div>
    </div>
  );
}
