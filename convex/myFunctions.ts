import { auth } from "./auth";
import { query, internalAction } from "./_generated/server";

export const getUser = query({
  handler: async (ctx, _args) => {
    const userId = await auth.getUserId(ctx);
    if (userId === null) {
      return null;
    }
    const user = await ctx.db.get(userId);
    return user;
  },
});

export const populate = internalAction({
  args: {},
  handler: async (ctx, args) => {
    const userId = "js7957e2pr8ptpe7759232a4rx6tmr7x";
  },
});
