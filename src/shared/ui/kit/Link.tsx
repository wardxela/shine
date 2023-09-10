import { Merge } from "@/shared/type-utils";
import { ComponentPropsWithoutRef } from "react";
import NextLink from "next/link";
import { clsx } from "../clsx";
export type LinkProps = Merge<
  ComponentPropsWithoutRef<"a">,
  {
    href: string;
    type: "internal" | "external";
    variant: "common" | "accent";
  }
>;

export function Link({
  className,
  children,
  type,
  variant,
  ...props
}: LinkProps) {
  const Component = type === "internal" ? NextLink : "a";

  return (
    <Component
      {...props}
      className={clsx(className, {
        "text-stone-500 hover:text-stone-950 hover:underline":
          variant === "common",
        "text-amber-600 hover:underline": variant === "accent",
      })}
    >
      {children}
    </Component>
  );
}
