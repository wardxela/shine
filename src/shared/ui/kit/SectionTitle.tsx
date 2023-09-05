import { ComponentPropsWithoutRef } from 'react';
import { clsx } from '../clsx';

// type Override<T, K> = Omit<T, keyof K> & K;

export type SectionTitleProps = ComponentPropsWithoutRef<'h2'>;

export function SectionTitle({
  className,
  children,
  ...props
}: SectionTitleProps) {
  return (
    <h2 {...props} className={clsx(className, 'font-semibold text-3xl')}>
      {children}
    </h2>
  );
}
