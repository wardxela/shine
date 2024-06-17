"use client";

import { FilterTitle } from "../FilterTitle";
import { RouterOutputs } from "@/trpc/shared";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";
import { Checkbox } from "@/shared/ui/components/checkbox";
import { Label } from "@/shared/ui/components/label";

export type CategoriesFilterProps = {
  categories: RouterOutputs["category"]["list"];
  count: number;
};

export function CategoriesFilter({ categories, count }: CategoriesFilterProps) {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const selectedCategories = searchParams.get("categories");
  const selectedCategoriesSet = new Set(selectedCategories?.split(",") ?? []);

  return (
    <div>
      <FilterTitle className="mb-5">Категории</FilterTitle>
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center justify-between">
            <Checkbox
              id={`category-${category.name}`}
              value={category.name}
              checked={selectedCategoriesSet.has(category.name)}
              onCheckedChange={(nextChecked) => {
                if (typeof nextChecked !== "boolean") {
                  return;
                }
                const newURLSearchParams = new URLSearchParams(searchParams);
                if (nextChecked) {
                  selectedCategoriesSet.add(category.name);
                } else {
                  selectedCategoriesSet.delete(category.name);
                }
                newURLSearchParams.set(
                  "categories",
                  Array.from(selectedCategoriesSet).join(","),
                );
                router.push(`${path}?${newURLSearchParams}`, { scroll: false });
              }}
            />
            <Label
              htmlFor={`category-${category.name}`}
              className="ml-4 mr-auto"
            >
              {category.name}
            </Label>
            <span className={clsx("text-sm")}>{category._count.products}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
