"use client";

import { ComponentPropsWithRef, forwardRef } from "react";
import { clsx } from "../clsx";

export type ColorCheckboxProps = ComponentPropsWithRef<"input"> & {
  color: string;
  isDark?: boolean;
};

export const ColorCheckbox = forwardRef<HTMLInputElement, ColorCheckboxProps>(
  function ColorCheckboxWithRef(
    { color, className, isDark = false, ...props },
    ref,
  ) {
    return (
      <div>
        <label className="relative block h-7 w-7">
          <input
            ref={ref}
            {...props}
            type="checkbox"
            className={clsx("peer sr-only", className)}
          />
          <div
            style={{ color: color }}
            className={clsx(
              "absolute left-0 top-0 h-full w-full rounded-full border bg-current ring-1 ring-white transition-shadow peer-checked:shadow-sm peer-checked:ring-current",
              isDark ? "border-black" : "border-white",
            )}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="13"
            viewBox="0 0 16 13"
            fill="none"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity peer-checked:opacity-100"
          >
            <path
              stroke={isDark ? "black" : "white"}
              d="M2 6L5.6 10L14 2"
              strokeWidth="3"
            />
          </svg>
        </label>
      </div>
    );
  },
);
