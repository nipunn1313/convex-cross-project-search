import { useAuthActions } from "@xixixao/convex-auth/react";
import { Button } from "./components/ui/button";

export function SignOutButton() {
  const { signOut } = useAuthActions();
  return <Button onClick={() => void signOut()}>Sign out</Button>;
}
