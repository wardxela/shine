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
      className={clsx(className, "px-5 py-2 text-lg font-semibold", {
        "bg-amber-950 text-white": variant === "primary-dark",
      })}
    >
      {children}
    </button>
  );
}
