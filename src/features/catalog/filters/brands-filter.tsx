"use client";

import { Checkbox } from "@/shared/ui/components/checkbox";
import { FilterTitle } from "../FilterTitle";
import { RouterOutputs } from "@/trpc/shared";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";
import { Label } from "@/shared/ui/components/label";

export type BrandsFilterProps = {
  brands: RouterOutputs["brand"]["list"];
};

export function BrandsFilter({ brands }: BrandsFilterProps) {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const selectedBrands = searchParams.get("brands");

  const selectedBrandsSet = new Set(selectedBrands?.split(",") ?? []);

  return (
    <div>
      <FilterTitle className="mb-5">Бренды</FilterTitle>
      <div className="space-y-4">
        {brands.map((brand) => (
          <div key={brand.id} className="flex items-center justify-between">
            <Checkbox
              id={`brand-${brand.name}`}
              value={brand.name}
              checked={selectedBrandsSet.has(brand.name)}
              onCheckedChange={(nextChecked) => {
                if (typeof nextChecked !== "boolean") {
                  return;
                }
                const newURLSearchParams = new URLSearchParams(searchParams);
                if (nextChecked) {
                  selectedBrandsSet.add(brand.name);
                } else {
                  selectedBrandsSet.delete(brand.name);
                }
                newURLSearchParams.set(
                  "brands",
                  Array.from(selectedBrandsSet).join(","),
                );
                router.push(`${path}?${newURLSearchParams}`, { scroll: false });
              }}
            />
            <Label htmlFor={`brand-${brand.name}`} className="ml-4 mr-auto">
              {brand.name}
            </Label>
            <span className={clsx("text-sm")}>{brand._count.products}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
