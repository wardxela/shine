import { createTRPCRouter, publicProcedure } from "../trpc";

export const categoryRouter = createTRPCRouter({
  list: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.category.findMany({
      include: { _count: { select: { products: true } } },
    });
  }),
});
