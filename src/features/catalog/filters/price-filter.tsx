"use client";

import { ComponentPropsWithRef, forwardRef, useId, useState } from "react";
import { FilterTitle } from "../FilterTitle";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";
import { Slider } from "@/shared/ui/components/slider";

export function PriceFilter() {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const from = forceValidPrice(
    parseInt(searchParams.get("price_from") ?? "1"),
    1,
  );
  const to = forceValidPrice(
    parseInt(searchParams.get("price_to") ?? "1000000"),
    1000000,
  );

  return (
    <div>
      <FilterTitle className="mb-5">Цена</FilterTitle>
      <Slider
        minStepsBetweenThumbs={1}
        defaultValue={[from, to]}
        min={1}
        max={1_000_000}
        step={100}
        onValueCommit={(value) => {
          const newURLSearchParams = new URLSearchParams(searchParams);
          newURLSearchParams.set("price_from", value[0].toString());
          newURLSearchParams.set("price_to", value[1].toString());
          router.push(`${path}?${newURLSearchParams}`, { scroll: false });
        }}
      />
      <div className="mt-4 flex items-center justify-between gap-2">
        <span className="border border-neutral-300 px-4 py-1.5 text-xs">
          {from}
        </span>
        <span className="border border-neutral-300 px-4 py-1.5 text-xs">
          {to}
        </span>
      </div>
    </div>
  );
}

const forceValidPrice = (value: number, defaultValue: number) => {
  if (Number.isNaN(value)) {
    return defaultValue;
  }
  if (value < 1) {
    return defaultValue;
  }
  if (value > 1_000_000) {
    return defaultValue;
  }
  return value;
};
