"use client";

import { clsx } from "@/shared/ui/clsx";
import { useState } from "react";
import { RadioButton, RadioButtonGroup } from "@/shared/ui/kit/client";
import { FilterTitle } from "../FilterTitle";

const demoCategories = [
  {
    name: "Все",
    count: 123,
  },
  {
    name: "Мужское",
    count: 89,
  },
  {
    name: "Женское",
    count: 123,
  },
  {
    name: "Пальто",
    count: 45,
  },
  {
    name: "Платье",
    count: 23,
  },
  {
    name: "Брюки",
    count: 23,
  },
];

export function CategoriesFilter() {
  const [selected, setSelected] = useState("Все");

  return (
    <div>
      <FilterTitle className="mb-6">Категории</FilterTitle>
      <div className="space-y-3">
        <RadioButtonGroup selected={selected} onChange={setSelected}>
          {demoCategories.map((category) => (
            <RadioButton key={category.name} value={category.name}>
              <CategoryRadioButton
                name={category.name}
                count={category.count}
                selected={category.name === selected}
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
