import {
  CardTitle,
  CardDescription,
  CardHeader,
  Card,
} from "@/components/ui/card";
import getRelativeTime from "@/util/SetTime";
import Link from "next/link";

function ListItem({ post_data }) {
  return (
    <div className="px-6 py-4 space-y-4">
      {post_data.map((post, i) => (
        <Link href={`/detail/${post._id}`} key={i}>
          <Card key={i}>
            <CardHeader>
              <CardTitle className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
                <span>{post.title}</span>
                <div className="flex items-center gap-2">
                  <span>{post.likeCount}</span>
                  <HeartIcon className="h-5 w-5" />

                  <span>{getRelativeTime(new Date(post.publishDate))}</span>
                </div>
              </CardTitle>
              <CardDescription>{post.username}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default ListItem;

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
