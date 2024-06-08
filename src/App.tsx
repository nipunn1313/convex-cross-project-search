import { Authenticated, Unauthenticated } from "convex/react";
import { SignIn } from "./SignIn";
import { SignOutButton } from "./SignOut";

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
        Welcome (tbd)!
        <SignOutButton />
      </p>
    </main>
  );
}

export default App;
