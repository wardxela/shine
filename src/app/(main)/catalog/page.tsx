import {
  CategoriesFilter,
  ColorsFilter,
  PriceFilter,
} from "@/features/catalog";

import man from "./_img/man.png";
import { ProductCard } from "@/entities/product";
import { BrandsFilter } from "@/features/catalog/filters/BrandsFilter";
import { api } from "@/trpc/server";
import { clsx } from "@/shared/ui/clsx";

export type CatalogPageProps = {
  searchParams: {
    offset?: string;
  };
};

const MAX_PRODUCTS_PER_PAGE = 10;

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const categoriesPromise = api.category.list.query();
  const brandsPromise = api.brand.list.query();
  const colorsPromise = api.color.list.query();
  const productsPromise = api.product.list.query({});
  const countPromise = api.product.count.query({});

  const [categories, brands, colors, products, count] = await Promise.all([
    categoriesPromise,
    brandsPromise,
    colorsPromise,
    productsPromise,
    countPromise,
  ]);

  const pages = Math.ceil(321 / MAX_PRODUCTS_PER_PAGE);
  let currentPage = searchParams.offset ? parseInt(searchParams.offset) : 0;

  if (isNaN(currentPage)) {
    currentPage = 0;
  }

  return (
    <main className="pb-14 pt-10">
      <div className="container flex gap-10">
        <div className="shrink-0 basis-56">
          <div className="space-y-14">
            <CategoriesFilter categories={categories} />
            <PriceFilter />
            <BrandsFilter brands={brands} />
            <ColorsFilter colors={colors} />
          </div>
        </div>
        <div className="flex flex-grow flex-col">
          <h1 className="mb-7 text-xl font-semibold">
            <span className="text-amber-600">{count}</span> <span>товаров</span>
          </h1>
          {products.length > 0 ? (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  image={man}
                  title={product.title}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  isNew={
                    Date.now() - product.createdAt.getMilliseconds() < 86400000
                  }
                  hasDiscount={!!product.oldPrice}
                />
              ))}
            </div>
          ) : (
            <p className="fond-bold text-lg text-stone-700">
              По заданному запросу ничего не найдено :(
            </p>
          )}
          <Pagination page={33} pages={pages} className="mt-auto" />
        </div>
      </div>
    </main>
  );
}

export type PaginationProps = {
  className?: string;
  page: number;
  pages: number;
  range?: number;
};

export function Pagination({
  className,
  page: current,
  pages,
  range = 5,
}: PaginationProps) {
  const visiblePages: number[] = [];

  const offset = Math.floor(range / 2);
  let left = current - 1;
  let right = current;
  console.log(current);

  for (let i = 0; i < range; i++) {
    if (
      right <= Math.min(current + offset + Math.max(0, offset - current), pages)
    ) {
      visiblePages.push(right++);
    } else if (
      left >=
      Math.max(0, current - offset - Math.max(offset - (pages - current), 0))
    ) {
      visiblePages.splice(0, 0, left--);
    } else {
      break;
    }
  }

  return (
    <div className={clsx("flex items-center justify-center gap-20", className)}>
      <button
        className="font-semibold disabled:text-neutral-400"
        disabled={visiblePages[0] === 0}
      >
        Назад
      </button>
      <div className="flex items-center gap-5">
        {visiblePages.map((page) => (
          <button
            className={clsx(
              "px-2 font-semibold",
              current === page && "relative text-white",
            )}
            key={page}
          >
            {page + 1}
            {current === page ? (
              <div className="absolute left-1/2 top-1/2 -z-10 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-md bg-zinc-800" />
            ) : null}
          </button>
        ))}
      </div>
      <button
        className="font-semibold disabled:text-neutral-400"
        disabled={visiblePages.at(-1) === pages - 1}
      >
        Вперед
      </button>
    </div>
  );
}

export const metadata = {
  title: "Каталог",
  description: "Каталог одежды ШАЙН",
};
