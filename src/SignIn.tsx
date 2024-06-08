"use client";

import { useAuthActions } from "@xixixao/convex-auth/react";

export function SignIn() {
  const { signIn } = useAuthActions();
  return <button onClick={() => signIn("github")}>Sign in with GitHub</button>;
}
