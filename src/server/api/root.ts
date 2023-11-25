import { createTRPCRouter } from "@/server/api/trpc";
import { authRouter } from "./routers/auth";
import { userRouter } from "./routers/user";
import { productRouter } from "./routers/product";
import { categoryRouter } from "./routers/category";
import { brandRouter } from "./routers/brand";
import { colorRouter } from "./routers/color";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  auth: authRouter,
  user: userRouter,
  product: productRouter,
  category: categoryRouter,
  brand: brandRouter,
  color: colorRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
