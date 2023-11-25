import { PropsWithChildren } from "react";
import { clsx } from "../clsx";

export type ErrorBoxProps = PropsWithChildren<{ className?: string }>;

export function ErrorBox({ children, className }: ErrorBoxProps) {
  return (
    <p
      className={clsx(
        "rounded-lg bg-red-500 p-4 py-2 text-center text-sm text-white",
        className,
      )}
    >
      {children}
    </p>
  );
}
