export function SignOutButton() {
  const { signOut } = useAuthActions();
  return <Button onClick={() => void signOut()}>Sign out</Button>;
}
