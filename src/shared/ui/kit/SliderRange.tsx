"use client";

import { Merge } from "@/shared/type-utils";
import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  useRef,
} from "react";
import { clsx } from "../clsx";

export type SliderRangeProps = Merge<
  ComponentPropsWithoutRef<"input">,
  {
    min: number;
    max: number;
    minCur: number;
    maxCur: number;
    onMinChange: (min: number) => void;
    onMaxChange: (max: number) => void;
  }
>;

export function SliderRange({
  min,
  max,
  minCur,
  maxCur,
  onMinChange,
  onMaxChange,
  className,
}: SliderRangeProps) {
  if (minCur < min) {
    throw new Error("minCur is less then min");
  }
  if (maxCur > max) {
    throw new Error("maxCur is greater than max");
  }

  const sliderRef = useRef<ElementRef<"div">>(null);
  const isMinPressed = useRef(false);
  const isMaxPressed = useRef(false);

  return (
    <div
      className={clsx(className, "relative h-10 rounded-md bg-stone-400")}
      ref={sliderRef}
      onMouseMove={(e) => {
        if (isMinPressed.current) {
          onMinChange(
            Math.floor(
              ((e.pageX - e.currentTarget.offsetLeft) * max) /
                sliderRef.current!.offsetWidth,
            ),
          );
        }
      }}
    >
      <Toggle
        onMouseDown={() => {
          isMinPressed.current = true;
        }}
        onMouseUp={() => {
          isMinPressed.current = false;
        }}
        // pos={minCur *  / (max - min)}
        pos={0}
      />
      <div></div>
      <div className="absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-amber-600"></div>
    </div>
  );
}

type ToggleProps = Merge<
  ComponentPropsWithRef<"div">,
  {
    pos: number;
  }
>;

const Toggle = forwardRef<ElementRef<"div">, ToggleProps>(function Toggle(
  { className, style, pos, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      {...props}
      style={{
        ...style,
        transform: `translate(${minmax(-10, pos - 10, 100)}px,-50%)`,
      }}
      className={clsx(
        className,
        "absolute left-0 top-1/2 flex h-10 w-10 items-center justify-center",
      )}
    >
      <div className="h-5 w-5 rounded-full bg-amber-600"></div>
    </div>
  );
});

function minmax(value: number, min: number, max: number) {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}
