import { convexAuth } from "@xixixao/convex-auth/server";

export const { auth, signIn, verifyCode, signOut, store } = convexAuth({
  providers: [],
});
