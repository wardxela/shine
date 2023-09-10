import { Merge } from "@/shared/type-utils";
import { ComponentPropsWithoutRef } from "react";
import { clsx } from "../clsx";

export type ButtonProps = Merge<
  ComponentPropsWithoutRef<"button">,
  {
    variant: "primary" | "primary-dark" | "primary-dark-bordered" | "secondary";
  }
>;

export function Button({
  variant,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        className,
        "block w-full px-5 py-2 text-lg font-semibold",
        {
          "bg-amber-600 text-white": variant === "primary",
          "bg-amber-950 text-white": variant === "primary-dark",
          "border border-stone-950": variant === "primary-dark-bordered",
          "bg-stone-200 text-stone-950": variant === "secondary",
        },
      )}
      {...props}
    >
      {children}
    </button>
  );
}
