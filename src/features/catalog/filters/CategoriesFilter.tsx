"use client";

import { clsx } from "@/shared/ui/clsx";
import { RadioButton, RadioButtonGroup } from "@/shared/ui/kit/client";
import { FilterTitle } from "../FilterTitle";
import { RouterOutputs } from "@/trpc/shared";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
        <RadioButtonGroup
          selected={selectedCategory || ""}
          onChange={(category) => {
            const newURLSearchParams = new URLSearchParams(searchParams);
            if (category === "Все") {
              newURLSearchParams.delete("category");
            } else {
              newURLSearchParams.set("category", category);
            }
            router.push(`${path}?${newURLSearchParams}`);
          }}
        >
          <RadioButton value="Все">
            <CategoryRadioButton
              name="Все"
              count={count}
              selected={!searchParams.get("category")}
            />
          </RadioButton>
          {categories.map((category) => (
            <RadioButton key={category.id} value={category.name}>
              <CategoryRadioButton
                name={category.name}
                count={category._count.products}
                selected={selectedCategory === category.name}
              />
            </RadioButton>
          ))}
        </RadioButtonGroup>
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
