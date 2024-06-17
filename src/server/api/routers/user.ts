import { createTRPCRouter, protectedProcedure } from "../trpc";
import { hash, verify } from "argon2";
import { changePasswordSchema, updateUserInfoSchema } from "../schemas/user";

export const userRouter = createTRPCRouter({
  me: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.user.findUniqueOrThrow({
      where: { id: ctx.session.user.id },
      select: {
        id: true,
        name: true,
        lastName: true,
        email: true,
        phone: true,
        address: true,
      },
    });
  }),
  changePassword: protectedProcedure
    .input(changePasswordSchema)
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUniqueOrThrow({
        where: { id: ctx.session.user.id },
        select: { passwordHash: true },
      });

      const isOldCorrect = await verify(user.passwordHash, input.password);

      if (!isOldCorrect) {
        return null;
      }

      const newPasswordHash = await hash(input.newPassword);

      await ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: { passwordHash: newPasswordHash },
      });

      return true;
    }),
  updateInfo: protectedProcedure
    .input(updateUserInfoSchema)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: input,
      });
      return true;
    }),
});
