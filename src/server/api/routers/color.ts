import { createTRPCRouter, publicProcedure } from "../trpc";

export const colorRouter = createTRPCRouter({
  list: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.color.findMany({
      include: { _count: { select: { products: true } } },
    });
  }),
});
