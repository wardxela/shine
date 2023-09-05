'use client';

import { clsx } from '@/shared/ui/clsx';
import Link, { LinkProps } from 'next/link';
import { ComponentPropsWithoutRef } from 'react';
import { usePathname } from 'next/navigation';

export type FooterSiteLinkProps = Omit<
  ComponentPropsWithoutRef<'a'>,
  keyof LinkProps
> &
  LinkProps;

export function FooterSiteLink({
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
        'text-stone-400 hover:text-stone-200': !isActive,
        'text-amber-400': isActive,
      })}
    >
      {children}
    </Link>
  );
}
