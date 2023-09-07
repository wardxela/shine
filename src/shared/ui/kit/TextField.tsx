"use client";

import { Merge } from "@/shared/type-utils";
import { ComponentPropsWithoutRef, useId } from "react";
import { clsx } from "../clsx";

export type TextFieldProps = Merge<
  ComponentPropsWithoutRef<"input">,
  {
    label?: string;
    variant?: "bordered" | "minimalist";
  }
>;

export function TextField({
  label,
  variant = "bordered",
  className,
  ...props
}: TextFieldProps) {
  const id = useId();
  return (
    <>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        {...props}
        className={clsx(
          className,
          "min-w-0 px-5 py-2 text-stone-700 outline-none transition placeholder:text-stone-400",
          {
            "ring-1 ring-stone-400 focus:ring-2 focus:ring-amber-600":
              variant === "bordered",
          },
        )}
      />
    </>
  );
}
