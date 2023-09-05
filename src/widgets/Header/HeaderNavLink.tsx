'use client';

import { clsx } from '@/shared/ui/clsx';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentPropsWithoutRef } from 'react';

export type HeaderNavLinkProps = Omit<
  ComponentPropsWithoutRef<'a'>,
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
      className={clsx(className, {
        'text-stone-950 hover:text-amber-500': !isActive,
        'text-amber-500': isActive,
      })}
    >
      {children}
    </Link>
  );
}
