import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

export function FilterTitle({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2 className={clsx(className, "text-lg font-semibold")} {...props}>
      {children}
    </h2>
  );
}
