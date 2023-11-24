import { clsx } from "@/shared/ui/clsx";
import { ComponentPropsWithoutRef } from "react";

export function FilterTitle({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2 className={clsx(className, "text-xl font-semibold")} {...props}>
      {children}
    </h2>
  );
}
