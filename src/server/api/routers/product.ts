import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const ProductListFiltersSchema = z.object({
  take: z.number().optional(),
  category: z.string().optional(),
  brands: z.array(z.string()).optional(),
  priceMin: z.number().optional(),
  priceMax: z.number().optional(),
  color: z.string().optional(),
  offset: z.number().optional(),
});

export const productRouter = createTRPCRouter({
  list: publicProcedure
    .input(ProductListFiltersSchema)
    .query(async ({ ctx, input }) => {
      return await ctx.db.product.findMany({
        where: {
          price: {
            gte: input.priceMin,
            lte: input.priceMax,
          },
          colors: {
            some: {
              name: input.color,
            },
          },
          categories: {
            some: {
              name: input.category,
            },
          },
          brands: {
            some: {
              name: {
                in: input.brands,
              },
            },
          },
        },
        take: input.take,
        skip: input.offset ? input.offset * 5 : undefined,
      });
    }),
  count: publicProcedure
    .input(ProductListFiltersSchema)
    .query(async ({ ctx }) => {
      return await ctx.db.product.count();
    }),
  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.product.findUnique({
        where: { id: input.id },
        include: {
          categories: { select: { id: true, name: true } },
          brands: { select: { id: true, name: true } },
          colors: { select: { id: true, name: true } },
          comments: {
            select: {
              id: true,
              user: { select: { id: true, name: true, lastName: true } },
              message: true,
              isPositive: true,
            },
          },
        },
      });
    }),
  leaveComment: protectedProcedure
    .input(
      z.object({
        message: z.string(),
        isPositive: z.boolean(),
        productId: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const result = await ctx.db.comment.create({
          data: {
            message: input.message,
            isPositive: input.isPositive,
            product: { connect: { id: input.productId } },
            user: { connect: { id: ctx.session.user.id } },
          },
        });
        return !!result;
      } catch {
        return false;
      }
    }),
});
