"use client";
import React from "react";
import ListBar from "../list/ListBar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function page() {
  return (
    <div>
      <ListBar title="New Post" NameofButton="None" />
      <div className="px-6 py-4">
        <form action="/api/publish/newpost" method="POST" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="postTitle">Title</Label>
            <Input
              name="title"
              id="postTitle"
              placeholder="Enter your post title"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="postContent">Content</Label>
            <Textarea
              name="content"
              className="min-h-[150px]"
              id="postContent"
              placeholder="Write your post content here..."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="postImage">Image URL</Label>
            <Input id="postImage" placeholder="Enter image URL" type="url" />
          </div>
          <Button type="submit">Publish Post</Button>
        </form>
      </div>
    </div>
  );
}

export default page;
