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
      email: "wardxela@gmail.com",
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
  await prisma.product.create({
    data: {
      title: "Футболка YAHWEH",
      description:
        "Футболка YAHWEH обладает необычными свойствами, такими как удобство и прочность. Она имеет отличную форму и удобство, что делает ее идеальным для всех, кто хочет попробовать новую одежду.",
      price: 5000,
      image:
        "https://lh3.googleusercontent.com/d/1MuSdeBncQ3_ZETM73rZUVRCMtsGNCXKQ",
      brands: { connect: [{ name: "Gucci" }] },
      colors: { connect: [{ name: "#dc2626" }] },
      categories: { connect: [{ name: "Верхняя одежда" }] },
    },
  });
  await prisma.product.create({
    data: {
      title: "Футболка KIIKII",
      description:
        "Футболка KIIKII имеет отличную форму и удобство, что делает ее идеальным для всех, кто хочет попробовать новую одежду.",
      price: 5000,
      image:
        "https://lh3.googleusercontent.com/d/10sK6Mde3slJ9lBg9FKtTsbhZ2I50omNw",
      brands: { connect: [{ name: "Balenciaga" }] },
      colors: { connect: [{ name: "#3b82f6" }] },
      categories: { connect: [{ name: "Верхняя одежда" }] },
    },
  });
  await prisma.product.create({
    data: {
      title: "Водолазка NONAME",
      description:
        "Водолазка NONAME имеет отличную форму и удобство, что делает ее идеальным для всех, кто хочет попробовать новую одежду.",
      price: 5000,
      image:
        "https://lh3.googleusercontent.com/d/1BE2hQCbMkVpyCXM4-SBw8i6TbYsDwHbx",
      brands: { connect: [{ name: "Gucci" }] },
      colors: { connect: [{ name: "#c2410c" }] },
      categories: { connect: [{ name: "Верхняя одежда" }] },
    },
  });
  await prisma.product.create({
    data: {
      title: "Кофта Balenciaga",
      description:
        "Кофта Balenciaga имеет отличную форму и удобство, что делает ее идеальным для всех, кто хочет попробовать новую одежду.",
      price: 7000,
      image:
        "https://lh3.googleusercontent.com/d/1-AaT7yVdyFYgbg6rawhHv3kagNSRmPSB",
      brands: { connect: [{ name: "Balenciaga" }] },
      colors: { connect: [{ name: "#3b82f6" }] },
      categories: { connect: [{ name: "Мужское" }] },
    },
  });
  await prisma.product.create({
    data: {
      title: "Куртка Macy",
      description:
        "Куртка Macy - это отличный способ попробовать новую одежду. Она имеет отличную форму и удобство, что делает ее идеальным для всех, кто хочет попробовать новую одежду.",
      price: 10000,
      image:
        "https://lh3.googleusercontent.com/d/1Mxd06pyuVktVMEMa35vOSFntciHr8wFg",
      brands: { connect: [{ name: "Supreme" }] },
      colors: { connect: [{ name: "#c2410c" }] },
      categories: {
        connect: [{ name: "Мужское" }, { name: "Верхняя одежда" }],
      },
    },
  });
  await prisma.product.create({
    data: {
      title: "Свитер Supreme",
      description:
        "Теплый свитер для всех. Он имеет отличную форму и удобство, что делает его идеальным для всех, кто хочет попробовать новую одежду.",
      price: 8000,
      image:
        "https://lh3.googleusercontent.com/d/1-94nPpxqSjLiM8OysIUx6G_MbYDl0Fbo",
      brands: { connect: [{ name: "Supreme" }] },
      colors: { connect: [{ name: "#c2410c" }] },
      categories: {
        connect: [{ name: "Верхняя одежда" }, { name: "Женское" }],
      },
    },
  });
  await prisma.product.create({
    data: {
      title: "Футболка FA",
      description:
        "Отличный выбор для мужчин. Футболка FA имеет отличную форму и удобство, что делает ее идеальным для всех, кто хочет попробовать новую одежду.",
      price: 8000,
      image:
        "https://lh3.googleusercontent.com/d/1aIboLP6ijkhRpxvkyFmYgoo5yOpwe1Gd",
      brands: { connect: [{ name: "Puma" }] },
      colors: { connect: [{ name: "#c2410c" }] },
      categories: {
        connect: [{ name: "Верхняя одежда" }, { name: "Мужское" }],
      },
    },
  });
  await prisma.product.create({
    data: {
      title: "Джинсы EA",
      description:
        "Джинсы EA - это уникальный способ выражения собственного стиля. Они имеют отличную форму и удобство, что делает их идеальным для всех, кто хочет попробовать новую одежду.",
      price: 8000,
      image:
        "https://lh3.googleusercontent.com/d/118aM7qzzdBW74-cfBpjUDwPGAi0WxIxL",
      brands: { connect: [{ name: "Nike" }] },
      colors: { connect: [{ name: "#3b82f6" }] },
      categories: {
        connect: [{ name: "Брюки" }, { name: "Женское" }],
      },
    },
  });
  await prisma.product.create({
    data: {
      title: "Платье Puma",
      description:
        "Женское платье Puma - это отличный выбор для всех, кто хочет попробовать новую одежду. Оно имеет отличную форму и удобство, что делает ее идеальным для всех.",
      price: 8000,
      image:
        "https://lh3.googleusercontent.com/d/1jIQHUZne4uAp2vcBAFYyCnUwObJn7pgU",
      brands: { connect: [{ name: "Puma" }] },
      colors: { connect: [{ name: "#ec4899" }] },
      categories: {
        connect: [{ name: "Женское" }],
      },
    },
  });
  await prisma.product.create({
    data: {
      title: "Худи Puma",
      description:
        "Худи Puma - это отличный выбор для всех, кто хочет попробовать новую одежду. Оно имеет отличную форму и удобство, что делает ее идеальным для всех.",
      price: 8000,
      image:
        "https://lh3.googleusercontent.com/d/1FMVnvdm4tZnxcsoKYHPFZ3598CSE8ZSa",
      brands: { connect: [{ name: "Puma" }] },
      colors: { connect: [{ name: "#ec4899" }] },
      categories: {
        connect: [{ name: "Женское" }],
      },
    },
  });
  await prisma.product.create({
    data: {
      title: "Balenciaga X300",
      description: "Обувь",
      price: 30000,
      image:
        "https://lh3.googleusercontent.com/d/1lhg4EqOVmEOG_rk_c48pT7kW2nXqpHmj",
      brands: { connect: [{ name: "Balenciaga" }] },
      colors: { connect: [{ name: "#3b82f6" }] },
      categories: {
        connect: [{ name: "Мужское" }],
      },
    },
  });
  await prisma.product.create({
    data: {
      title: "Balenciaga Hoodie",
      description: "Худи",
      price: 40000,
      image:
        "https://lh3.googleusercontent.com/d/1tM2aWoc-iQm3OcMeid0QWtv1BcQcUB-8",
      brands: { connect: [{ name: "Balenciaga" }] },
      colors: { connect: [{ name: "#3b82f6" }] },
      categories: {
        connect: [{ name: "Мужское" }],
      },
    },
  });
  await prisma.product.create({
    data: {
      title: "Balenciaga Hoodie",
      description: "Худи",
      price: 40000,
      image:
        "https://lh3.googleusercontent.com/d/1RcYBoRH0gJeK5oCEFJJFhqIVrxa8pyCe",
      brands: { connect: [{ name: "Balenciaga" }] },
      colors: { connect: [{ name: "#3b82f6" }] },
      categories: {
        connect: [{ name: "Мужское" }],
      },
    },
  });
  await prisma.product.create({
    data: {
      title: "Balenciaga Hoodie",
      description: "Худи",
      price: 40000,
      image:
        "https://lh3.googleusercontent.com/d/1cu0_ZwIOiJRnwplsPVJ7qTB6GF1h5dHT",
      brands: { connect: [{ name: "Balenciaga" }] },
      colors: { connect: [{ name: "#3b82f6" }] },
      categories: {
        connect: [{ name: "Мужское" }],
      },
    },
  });
  await prisma.product.create({
    data: {
      title: "Balenciaga Hoodie",
      description: "Худи",
      price: 40000,
      image:
        "https://lh3.googleusercontent.com/d/1AsJ3osERwte7gMnuV30wDN8pi12O5XP_",
      brands: { connect: [{ name: "Balenciaga" }] },
      colors: { connect: [{ name: "#3b82f6" }] },
      categories: {
        connect: [{ name: "Мужское" }],
      },
    },
  });
  await prisma.product.create({
    data: {
      title: "Сумка Louis Vuitton",
      description: "Сумка",
      price: 40000,
      image:
        "https://lh3.googleusercontent.com/d/1B07AKMp2fhcOvx07cgGbQSVyFgI0rYLs",
      brands: { connect: [{ name: "Louise Vuitton" }] },
      colors: { connect: [{ name: "#dc2626" }] },
      categories: {
        connect: [{ name: "Женское" }],
      },
    },
  });
  await prisma.product.create({
    data: {
      title: "Louis Vuitton X300",
      description: "Худи",
      price: 40000,
      image:
        "https://lh3.googleusercontent.com/d/1zHKTPOP21rU60hStw1NKBJpcWlCkAfva",
      brands: { connect: [{ name: "Louise Vuitton" }] },
      colors: { connect: [{ name: "#dc2626" }] },
      categories: {
        connect: [{ name: "Женское" }],
      },
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
