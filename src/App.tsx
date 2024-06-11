import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { SignIn } from "./SignIn";
import { SignOutButton } from "./SignOut";
import { api } from "../convex/_generated/api";

function App() {
  return (
    <main className="container flex flex-col gap-8">
      <h1 className="text-4xl font-extrabold my-8 text-center">
        Convex Cross Project Search
      </h1>
      <Authenticated>
        <SignedInContent />
      </Authenticated>
      <Unauthenticated>
        <SignIn />
      </Unauthenticated>
    </main>
  );
}

function SignedInContent() {
  return (
    <main className="container max-w-2xl flex flex-col gap-8">
      <p className="flex gap-4 items-center justify-between">
        <Welcome />
        <SignOutButton />
      </p>
    </main>
  );
}

function Welcome() {
  const user = useQuery(api.myFunctions.getUser);
  if (!user) {
    return "Welcome";
  }
  return (
    <>
      <img src={user.image} width="80" />
      Welcome {user.name}!
    </>
  );
}

export default App;
