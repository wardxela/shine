import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const cartRouter = createTRPCRouter({
  isIn: protectedProcedure
    .input(z.object({ productId: z.number() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: { id: ctx.session.user.id },
        select: { cart: { select: { id: true } } },
      });
      const result = await ctx.db.productCounted.findUnique({
        where: {
          cartId_productId: {
            cartId: user!.cart!.id,
            productId: input.productId,
          },
        },
        select: { id: true },
      });
      return !!result;
    }),
  add: protectedProcedure
    .input(z.object({ productId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      try {
        const user = await ctx.db.user.findUnique({
          where: { id: ctx.session.user.id },
          select: { cart: { select: { id: true } } },
        });
        await ctx.db.productCounted.create({
          data: {
            cart: { connect: { id: user!.cart!.id } },
            product: { connect: { id: input.productId } },
          },
        });
        return true;
      } catch (e) {
        return false;
      }
    }),
  remove: protectedProcedure
    .input(z.object({ productId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      try {
        const user = await ctx.db.user.findUnique({
          where: { id: ctx.session.user.id },
          select: { cart: { select: { id: true } } },
        });
        await ctx.db.productCounted.delete({
          where: {
            cartId_productId: {
              cartId: user!.cart!.id,
              productId: input.productId,
            },
          },
          select: { id: true },
        });
        return true;
      } catch (e) {
        return false;
      }
    }),
  count: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findUnique({
      where: { id: ctx.session.user.id },
      select: { cart: { select: { id: true } } },
    });
    return await ctx.db.productCounted.count({
      where: { cart: { id: user!.cart!.id } },
    });
  }),
  list: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.cart.findUnique({
      where: { userId: ctx.session.user.id },
      select: {
        products: {
          select: {
            id: true,
            count: true,
            isBought: true,
            product: {
              select: {
                id: true,
                title: true,
                image: true,
                description: true,
                price: true,
              },
            },
          },
        },
      },
    });
  }),
});
