import { createTRPCRouter, publicProcedure } from "../trpc";

export const brandRouter = createTRPCRouter({
  list: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.brand.findMany({
      include: { _count: { select: { products: true } } },
    });
  }),
});
