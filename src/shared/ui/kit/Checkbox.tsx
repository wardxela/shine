import { Merge } from "@/shared/type-utils";
import { ComponentPropsWithoutRef } from "react";
import { clsx } from "../clsx";

export type CheckboxProps = Merge<
  Omit<ComponentPropsWithoutRef<"input">, "type">,
  { label?: string }
>;

export function Checkbox({ className, label, ...props }: CheckboxProps) {
  return (
    <label className={clsx(className, "flex items-center gap-3")}>
      <input type="checkbox" className="peer sr-only" />
      <div className="grid h-5 w-5 place-items-center border-2 border-stone-400 peer-checked:border-amber-600 peer-focus:border-amber-600 [&>svg]:hidden peer-checked:[&>svg]:block">
        <svg
          width="12"
          height="10"
          viewBox="0 0 12 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 4.5L4 8L11 1"
            className="stroke-amber-600"
            strokeWidth="2"
          />
        </svg>
      </div>
      {label ? (
        <span className="select-none text-sm text-stone-500 peer-checked:text-black">
          {label}
        </span>
      ) : null}
    </label>
  );
}
