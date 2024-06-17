"use client";

import Link, { LinkProps } from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export type FooterSiteLinkProps = Omit<
  ComponentPropsWithoutRef<"a">,
  keyof LinkProps
> &
  LinkProps;

export function FooterLink({
  className,
  href,
  children,
  ...props
}: FooterSiteLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      {...props}
      href={href}
      className={clsx(className, {
        "text-neutral-400 hover:text-neutral-200": !isActive,
        "text-red-400": isActive,
      })}
    >
      {children}
    </Link>
  );
}
