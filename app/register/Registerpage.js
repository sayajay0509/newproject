import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export default function Registerpage() {
  return (
    <div className="px-6 py-4">
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Create your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form method="POST" action="/api/auth/signup" className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  name="user_name"
                  id="username"
                  placeholder="Username"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  name="user_email"
                  id="email"
                  placeholder="Email"
                  required
                  type="email"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  name="user_password"
                  id="password"
                  placeholder="Password"
                  required
                  type="password"
                />
              </div>
              <div>
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  name="user_confirm_password"
                  id="confirm-password"
                  placeholder="Confirm Password"
                  required
                  type="password"
                />
              </div>
            </div>
            <Button className="w-full" type="submit">
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
