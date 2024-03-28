import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function Editfile({ post_data }) {
  return (
    <div className="px-6 py-4">
      <form action="/api/edit/edit" method="POST" className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="postTitle">Title</Label>
          <Input name="title" id="postTitle" defaultValue={post_data.title} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="postContent">Content</Label>
          <Textarea
            name="content"
            className="min-h-[150px]"
            id="postContent"
            defaultValue={post_data.content}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="postImage">Image URL</Label>
          <Input id="postImage" placeholder="Enter image URL" type="url" />
        </div>
        <Button type="submit">Publish Post</Button>
        <Input
          name="_id"
          id="postTitle"
          defaultValue={post_data._id.toString()}
          style={{ display: "none" }}
        />
      </form>
    </div>
  );
}

export default Editfile;
