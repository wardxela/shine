import {
  CategoriesFilter,
  ColorsFilter,
  PriceFilter,
  BrandsFilter,
  CatalogPagination,
} from "@/features/catalog";

import { ProductCard } from "@/entities/product";
import { api } from "@/trpc/server";
import { Pagination } from "@/shared/ui-old/kit/client";

export type CatalogPageProps = {
  searchParams: {
    categories?: string;
    brands?: string;
    price_from?: string;
    price_to?: string;
    color?: string;
    offset?: string;
  };
};

const MAX_PRODUCTS_PER_PAGE = 10;

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const categoriesPromise = api.category.list.query();
  const brandsPromise = api.brand.list.query();
  const colorsPromise = api.color.list.query();

  const query = {
    categories:
      searchParams.categories && searchParams.categories.length > 0
        ? searchParams.categories?.split(",").filter((c) => c.length > 0)
        : undefined,
    brands:
      searchParams.brands && searchParams.brands.length > 0
        ? searchParams.brands?.split(",").filter((b) => b.length > 0)
        : undefined,
    priceMin: searchParams.price_from ? +searchParams.price_from : undefined,
    priceMax: searchParams.price_to ? +searchParams.price_to : undefined,
    color: searchParams.color,
    offset: searchParams.offset ? +searchParams.offset : undefined,
    take: MAX_PRODUCTS_PER_PAGE,
  };

  const productsPromise = api.product.list.query(query);
  const countPromise = api.product.count.query(query);

  const [categories, brands, colors, products, count] = await Promise.all([
    categoriesPromise,
    brandsPromise,
    colorsPromise,
    productsPromise,
    countPromise,
  ]);

  const pages = Math.ceil(count / MAX_PRODUCTS_PER_PAGE);

  let currentPage = searchParams.offset ? parseInt(searchParams.offset) : 0;

  if (isNaN(currentPage)) {
    currentPage = 0;
  }

  return (
    <main className="pb-14 pt-10">
      <div className="container flex gap-10">
        <div className="hidden shrink-0 basis-56 sm:block">
          <div className="space-y-10">
            <CategoriesFilter categories={categories} count={count} />
            <PriceFilter />
            <BrandsFilter brands={brands} />
            <ColorsFilter colors={colors} />
          </div>
        </div>
        <div className="flex flex-grow flex-col">
          <h1 className="mb-7 text-lg font-semibold">
            <span className="text-red-700">{count}</span> <span>товаров</span>
          </h1>
          {products.length > 0 ? (
            <div className="mb-10 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  isNew={Date.now() - product.createdAt.getTime() < 86400000}
                  hasDiscount={!!product.oldPrice}
                  href={`catalog/${product.id}`}
                />
              ))}
            </div>
          ) : (
            <p className="fond-bold text-sm text-stone-700">
              По заданному запросу ничего не найдено
            </p>
          )}
          <CatalogPagination page={currentPage} pages={pages} />
        </div>
      </div>
    </main>
  );
}

export const metadata = {
  title: "Каталог",
  description: "Каталог одежды SHINE",
};
