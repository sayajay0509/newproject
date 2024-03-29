"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
function DefaultSideBar({ session }) {
  return (
    <aside className="w-full lg:w-64 border-r bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900">
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <span className="text-lg font-semibold">UserComm</span>
        <Button size="icon" variant="ghost">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </div>
      <nav className="px-6 py-4 space-y-2">
        <Link
          className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-50"
          href="#"
        >
          <HomeIcon className="h-5 w-5" />
          <span>Home</span>
        </Link>
        <Link
          className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-50"
          href="/list/1"
        >
          <UsersIcon className="h-5 w-5" />
          <span>Users</span>
        </Link>
        <Link
          className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-50"
          href="#"
        >
          {" "}
          <SettingsIcon className="h-5 w-5" />
          <span>Settings</span>
        </Link>
        <Link
          className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-50"
          href="/register"
        >
          <UserPlusIcon className="h-5 w-5" />
          <span>Register</span>
        </Link>
        {session ? (
          <Link
            onClick={() => {
              signOut();
            }}
            className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            <LogOutIcon className="h-5 w-5" />
            <span>Sign Out</span>
          </Link>
        ) : (
          <Link
            className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-50"
            href="/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F"
          >
            <LogInIcon className="h-5 w-5" />
            <span>Sign In</span>
          </Link>
        )}
      </nav>
      <div className="px-6 py-4 border-t">
        <div className="flex items-center space-x-2">
          {session ? (
            <>
              <Avatar className="h-9 w-9">
                <AvatarImage alt="User Name" src={session.user.image} />
                <AvatarFallback>User</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">{session.user.name}</span>
            </>
          ) : null}
        </div>
      </div>{" "}
    </aside>
  );
}
function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LogInIcon(props) {
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
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  );
}

function LogOutIcon(props) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function UserPlusIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" x2="19" y1="8" y2="14" />
      <line x1="22" x2="16" y1="11" y2="11" />
    </svg>
  );
}
export default DefaultSideBar;
