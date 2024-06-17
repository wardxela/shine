"use client";

import { Checkbox } from "@/shared/ui/components/checkbox";
import { FilterTitle } from "../FilterTitle";
import { RouterOutputs } from "@/trpc/shared";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";

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
      <FilterTitle className="mb-6">Бренды</FilterTitle>
      <div className="space-y-4">
        {brands.map((brand) => (
          <div key={brand.id} className="flex items-center justify-between">
            <Checkbox
              // label={brand.name}
              value={brand.name}
              checked={selectedBrandsSet.has(brand.name)}
              onChange={(e) => {
                const newURLSearchParams = new URLSearchParams(searchParams);
                newURLSearchParams.set(
                  "brands",
                  // @ts-expect-error TODO
                  e.currentTarget.checked
                    ? selectedBrands
                      ? selectedBrands + `,${e.currentTarget.value}`
                      : e.currentTarget.value
                    : (selectedBrands?.split(",") ?? [])
                        .filter((c) => c !== e.currentTarget.value)
                        .join(","),
                );
                router.push(`${path}?${newURLSearchParams}`);
              }}
            />
            <span className={clsx("text-sm")}>{brand._count.products}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
