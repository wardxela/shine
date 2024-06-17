"use client";

import { Merge } from "@/shared/type-utils";
import clsx from "clsx";
import { ComponentPropsWithoutRef, useId } from "react";

export type TextFieldProps = Merge<
  ComponentPropsWithoutRef<"input">,
  {
    label: string;
  }
>;

export function TextField({ className, label, ...props }: TextFieldProps) {
  const id = useId();
  return (
    <>
      <label className="text-stone-400" htmlFor={id}>
        {label}
      </label>
      <input
        {...props}
        id={id}
        className={clsx(
          className,
          "min-w-0 flex-grow border-b border-b-stone-300 py-2 outline-none transition placeholder:text-stone-400 focus:border-b-amber-600",
        )}
      />
    </>
  );
}
