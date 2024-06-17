"use client";

import { ColorCheckbox } from "@/shared/ui-old/kit/ColorCheckbox";
import { FilterTitle } from "../FilterTitle";
import { RouterOutputs } from "@/trpc/shared";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export type ColorsFilterProps = {
  colors: RouterOutputs["color"]["list"];
};

export function ColorsFilter({ colors }: ColorsFilterProps) {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const selectedColor = searchParams.get("color");

  return (
    <div>
      <FilterTitle className="mb-6">Цвет</FilterTitle>
      <div className="grid grid-cols-[repeat(4,30px)] gap-4">
        {colors.map((color) => (
          <ColorCheckbox
            key={color.id}
            color={color.name}
            isDark={color.name === "#fff"}
            checked={selectedColor === color.name}
            onChange={() => {
              const newURLSearchParams = new URLSearchParams(searchParams);
              newURLSearchParams.set("color", color.name);
              router.push(`${path}?${newURLSearchParams}`);
            }}
          />
        ))}
      </div>
    </div>
  );
}
