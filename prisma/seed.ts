import { PrismaClient } from "@prisma/client";
import { hash } from "argon2";

const prisma = new PrismaClient();

async function main() {
  await prisma.role.upsert({
    where: { name: "admin" },
    update: {},
    create: {
      name: "admin",
    },
  });
  await prisma.role.upsert({
    where: { name: "admin" },
    update: {},
    create: {
      name: "admin",
    },
  });
  await prisma.user.upsert({
    where: { email: "wardxela@gmail.com" },
    update: {},
    create: {
      name: "Александр",
      lastName: "Тюринов",
      phone: "+79161234567",
      roleId: "admin",
      passwordHash: await hash(process.env.ADMIN_PASSWORD as string),
      email: "admin@example.com",
    },
  });
  await prisma.category.upsert({
    where: { name: "Все" },
    update: {},
    create: {
      name: "Все",
    },
  });
  await prisma.category.upsert({
    where: { name: "Верхняя одежда" },
    update: {},
    create: {
      name: "Верхняя одежда",
    },
  });
  await prisma.category.upsert({
    where: { name: "Детское" },
    update: {},
    create: {
      name: "Детское",
    },
  });
  await prisma.category.upsert({
    where: { name: "Рубашки" },
    update: {},
    create: {
      name: "Рубашки",
    },
  });
  await prisma.category.upsert({
    where: { name: "Женское" },
    update: {},
    create: {
      name: "Женское",
    },
  });
  await prisma.category.upsert({
    where: { name: "Спортивное" },
    update: {},
    create: {
      name: "Спортивное",
    },
  });
  await prisma.category.upsert({
    where: { name: "Мужское" },
    update: {},
    create: {
      name: "Мужское",
    },
  });
  await prisma.category.upsert({
    where: { name: "Брюки" },
    update: {},
    create: {
      name: "Брюки",
    },
  });
  await prisma.brand.upsert({
    where: { name: "Gucci" },
    update: {},
    create: {
      name: "Gucci",
    },
  });
  await prisma.brand.upsert({
    where: { name: "Supreme" },
    update: {},
    create: {
      name: "Supreme",
    },
  });
  await prisma.brand.upsert({
    where: { name: "Balenciaga" },
    update: {},
    create: {
      name: "Balenciaga",
    },
  });
  await prisma.brand.upsert({
    where: { name: "Vance" },
    update: {},
    create: {
      name: "Vance",
    },
  });
  await prisma.brand.upsert({
    where: { name: "Louise Vuitton" },
    update: {},
    create: {
      name: "Louise Vuitton",
    },
  });
  await prisma.brand.upsert({
    where: { name: "Addidas" },
    update: {},
    create: {
      name: "Addidas",
    },
  });
  await prisma.brand.upsert({
    where: { name: "Nike" },
    update: {},
    create: {
      name: "Nike",
    },
  });
  await prisma.brand.upsert({
    where: { name: "Puma" },
    update: {},
    create: {
      name: "Puma",
    },
  });
  await prisma.color.upsert({
    where: { name: "#dc2626" },
    update: {},
    create: {
      name: "#dc2626",
    },
  });
  await prisma.color.upsert({
    where: { name: "#c2410c" },
    update: {},
    create: {
      name: "#c2410c",
    },
  });
  await prisma.color.upsert({
    where: { name: "#16a34a" },
    update: {},
    create: {
      name: "#16a34a",
    },
  });
  await prisma.color.upsert({
    where: { name: "#14b8a6" },
    update: {},
    create: {
      name: "#14b8a6",
    },
  });
  await prisma.color.upsert({
    where: { name: "#06b6d4" },
    update: {},
    create: {
      name: "#06b6d4",
    },
  });
  await prisma.color.upsert({
    where: { name: "#3b82f6" },
    update: {},
    create: {
      name: "#3b82f6",
    },
  });
  await prisma.color.upsert({
    where: { name: "#8b5cf6" },
    update: {},
    create: {
      name: "#8b5cf6",
    },
  });
  await prisma.color.upsert({
    where: { name: "#ec4899" },
    update: {},
    create: {
      name: "#ec4899",
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
