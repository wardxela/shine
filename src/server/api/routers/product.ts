import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const ProductListFiltersSchema = z.object({});

const MAX_COUNT_PER_PAGE = 20;

export const productRouter = createTRPCRouter({
  list: publicProcedure
    .input(ProductListFiltersSchema)
    .query(async ({ ctx }) => {
      return await ctx.db.product.findMany();
    }),
  count: publicProcedure
    .input(ProductListFiltersSchema)
    .query(async ({ ctx }) => {
      return await ctx.db.product.count();
    }),
});
