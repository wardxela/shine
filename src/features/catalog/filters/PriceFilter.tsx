"use client";

import { clsx } from "@/shared/ui/clsx";
import { ComponentPropsWithRef, forwardRef, useId, useState } from "react";
import { FilterTitle } from "../FilterTitle";

export function PriceFilter() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(2000);

  return (
    <div>
      <FilterTitle className="mb-6">Цена</FilterTitle>
      <div className="grid grid-cols-[90px,90px] justify-between">
        <Input label="От" />
        <Input label="До" />
      </div>
    </div>
  );
}

type InputProps = ComponentPropsWithRef<"input"> & { label: string };

const Input = forwardRef<HTMLInputElement, InputProps>(function InputWithRef(
  { className, label, ...props },
  ref,
) {
  const id = useId();

  return (
    <div
      className={clsx(
        className,
        "flex h-7 items-center gap-2 border border-stone-300 text-xs",
      )}
    >
      <label className="px-2 py-1 text-neutral-500" htmlFor={id}>
        {label}
      </label>
      <input id={id} ref={ref} {...props} className="h-full min-w-0" />
    </div>
  );
});
