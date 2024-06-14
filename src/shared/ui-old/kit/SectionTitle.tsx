import { ComponentPropsWithoutRef } from "react";
import { clsx } from "../clsx";

export type SectionTitleProps = ComponentPropsWithoutRef<"h2">;

export function SectionTitle({
  className,
  children,
  ...props
}: SectionTitleProps) {
  return (
    <h2 {...props} className={clsx(className, "text-3xl font-semibold")}>
      {children}
    </h2>
  );
}
