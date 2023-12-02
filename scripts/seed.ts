import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const colors = [
  "#b91c1c",
  "#a3e635",
  "#2dd4bf",
  "#22d3ee",
  "#7c3aed",
  "#c026d3",
  "#e11d48",
  "#64748b",
];

const categories = [
  "Женское",
  "Мужское",
  "Детское",
  "Верхняя одежда",
  "Спортивное",
  "Брюки",
  "Рубашки",
  "Джинсы",
];

const brands = [
  "Gucci",
  "Supreme",
  "Off White",
  "Vance",
  "Louise Vuitton",
  "Adidas",
  "Nike",
  "Puma",
];

function randomI(len: number) {
  return Math.floor(Math.random() * len);
}

function random<T>(arr: T[], count = 1): T[] {
  const seen = new Set<number>();
  const result: T[] = [];
  let d = 0;
  for (let i = 0; i < count && i < arr.length; i++) {
    while (!seen.has((d = randomI(arr.length)))) {
      result.push(arr[d]);
      seen.add(d);
    }
  }
  return result;
}

async function main() {
  await db.$transaction(
    colors
      .map((color) =>
        db.color.upsert({
          create: { name: color },
          update: {},
          where: { name: color },
        }),
      )
      .concat(
        categories.map((category) =>
          db.category.upsert({
            create: { name: category },
            update: {},
            where: { name: category },
          }),
        ),
      )
      .concat(
        brands.map((brand) =>
          db.brand.upsert({
            create: { name: brand },
            update: {},
            where: { name: brand },
          }),
        ),
      ),
  );

  db.$transaction([
    db.product.create({
      data: {
        title: "Пуховик Zendaya",
        description:
          "Женский пуховик, созданный специально для экстремальных условий: от 0 °C до -45 °C. Этот красивый и стильный пуховик обеспечит вас теплом в любой мороз. Декоративные элементы и стойка воротника добавляют изысканности этой модели. Параметры модели на фото: обхват груди - 86 см, обхват талии - 60 см, обхват бедер - 90 см, рост - 172 см.",
        image:
          "https://www.dropbox.com/scl/fi/5ykuc0dh1byjcyenh3ds2/6828977756.webp?rlkey=isgsjkfxl4ubou6av83ade7pu&raw=1",
        price: 5940,
        oldPrice: 12939,
        brands: {
          connect: random(brands, 2).map((brand) => ({ name: brand })),
        },
        colors: {
          connect: random(colors, 2).map((color) => ({ name: color })),
        },
        categories: {
          connect: random(categories, 2).map((category) => ({
            name: category,
          })),
        },
      },
    }),
  ]);
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
