import {
  CategoriesFilter,
  ColorsFilter,
  PriceFilter,
} from "@/features/catalog";

import man from "./_img/man.png";
import { ProductCard } from "@/entities/product";
import { BrandsFilter } from "@/features/catalog/filters/BrandsFilter";

export default function CatalogPage() {
  return (
    <main className="pb-14 pt-10">
      <div className="container flex gap-10">
        <div className="shrink-0 basis-56">
          <div className="space-y-14">
            <div>
              <CategoriesFilter />
              <hr />
            </div>
            <PriceFilter />
            <BrandsFilter />
            <ColorsFilter />
          </div>
        </div>
        <div className="flex-grow">
          <h1 className="mb-7 text-xl font-semibold">
            <span className="text-amber-600">99</span> <span>товаров</span>
          </h1>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
            <ProductCard
              image={man}
              title="Деловой костюм"
              price={9999}
              oldPrice={20000}
              isNew={false}
              hasDiscount={false}
            />
            <ProductCard
              image={man}
              title="Деловой костюм"
              price={9999}
              oldPrice={20000}
              isNew={false}
              hasDiscount={false}
            />
            <ProductCard
              image={man}
              title="Деловой костюм"
              price={9999}
              oldPrice={20000}
              isNew={false}
              hasDiscount={false}
            />
            <ProductCard
              image={man}
              title="Деловой костюм"
              price={9999}
              oldPrice={20000}
              isNew={false}
              hasDiscount={false}
            />
            <ProductCard
              image={man}
              title="Деловой костюм"
              price={9999}
              oldPrice={20000}
              isNew={false}
              hasDiscount={false}
            />
            <ProductCard
              image={man}
              title="Деловой костюм"
              price={9999}
              oldPrice={20000}
              isNew={false}
              hasDiscount={false}
            />
            <ProductCard
              image={man}
              title="Деловой костюм"
              price={9999}
              oldPrice={20000}
              isNew={false}
              hasDiscount={false}
            />
            <ProductCard
              image={man}
              title="Деловой костюм"
              price={9999}
              oldPrice={20000}
              isNew={false}
              hasDiscount={false}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export const metadata = {
  title: "Каталог",
  description: "Каталог одежды ШАЙН",
};
