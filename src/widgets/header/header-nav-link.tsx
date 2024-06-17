"use client";

import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef } from "react";

export type HeaderNavLinkProps = Omit<
  ComponentPropsWithoutRef<"a">,
  keyof LinkProps
> &
  LinkProps;

export function HeaderNavLink({
  className,
  href,
  children,
  ...props
}: HeaderNavLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      {...props}
      href={href}
      className={clsx(className, "transition-colors", {
        "text-neutral-700 hover:text-red-700": !isActive,
        "text-red-700": isActive,
      })}
    >
      {children}
    </Link>
  );
}
