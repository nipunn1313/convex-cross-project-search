"use client";

import { useAuthActions } from "@xixixao/convex-auth/react";
import { Button } from "./components/ui/button";

export function SignIn() {
  const { signIn } = useAuthActions();
  return <Button onClick={() => signIn("github")}>Sign in with GitHub</Button>;
}
