/*
  Warnings:

  - A unique constraint covering the columns `[cartId,productId]` on the table `ProductCounted` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProductCounted_cartId_productId_key" ON "ProductCounted"("cartId", "productId");
