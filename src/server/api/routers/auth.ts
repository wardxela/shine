import { hash } from "argon2";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { registerUserSchema } from "../schemas/auth";

export const authRouter = createTRPCRouter({
  register: publicProcedure
    .input(registerUserSchema)
    .mutation(async ({ ctx, input }) => {
      const passwordHash = await hash(input.password);
      try {
        const user = await ctx.db.user.create({
          data: {
            name: input.name,
            lastName: input.lastName,
            email: input.email,
            phone: input.phone,
            passwordHash,
            role: { connect: { name: "user" } },
          },
        });
        await ctx.db.cart.create({
          data: { user: { connect: { id: user.id } } },
        });
        return user.id;
      } catch {
        return null;
      }
    }),
});
