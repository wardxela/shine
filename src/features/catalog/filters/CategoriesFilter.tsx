"use client";

import { RadioGroup, RadioGroupItem } from "@/shared/ui/components/radio-group";
import { FilterTitle } from "../FilterTitle";
import { RouterOutputs } from "@/trpc/shared";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";

export type CategoriesFilterProps = {
  categories: RouterOutputs["category"]["list"];
  count: number;
};

export function CategoriesFilter({ categories, count }: CategoriesFilterProps) {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const selectedCategory = searchParams.get("category");

  return (
    <div>
      <FilterTitle className="mb-6">Категории</FilterTitle>
      <div className="space-y-3">
        <RadioGroup
          value={selectedCategory || ""}
          onValueChange={(category) => {
            const newURLSearchParams = new URLSearchParams(searchParams);
            if (category === "Все") {
              newURLSearchParams.delete("category");
            } else {
              newURLSearchParams.set("category", category);
            }
            router.push(`${path}?${newURLSearchParams}`);
          }}
        >
          <RadioGroupItem value="Все">
            <CategoryRadioButton
              name="Все"
              count={count}
              selected={!searchParams.get("category")}
            />
          </RadioGroupItem>
          {categories.map((category) => (
            <RadioGroupItem key={category.id} value={category.name}>
              <CategoryRadioButton
                name={category.name}
                count={category._count.products}
                selected={selectedCategory === category.name}
              />
            </RadioGroupItem>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}

export type CategoryRadioButtonProps = {
  name: string;
  count: number;
  selected: boolean;
};

function CategoryRadioButton({
  name,
  count,
  selected,
}: CategoryRadioButtonProps) {
  return (
    <div
      className={clsx(
        "flex flex-wrap items-center justify-between gap-4 text-sm",
        !selected && "text-stone-500",
        selected && "font-semibold",
      )}
    >
      <span>{name}</span>
      <span>{count}</span>
    </div>
  );
}
