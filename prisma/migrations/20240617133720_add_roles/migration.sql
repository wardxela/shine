-- AlterTable
ALTER TABLE "User" ADD COLUMN     "roleId" TEXT NOT NULL DEFAULT 'user';

-- CreateTable
CREATE TABLE "Role" (
    "name" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("name")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
