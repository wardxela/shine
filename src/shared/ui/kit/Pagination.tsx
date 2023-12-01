"use client";

import { useRouter } from "next/navigation";
import { clsx } from "../clsx";

export type PaginationProps = {
  className?: string;
  page: number;
  pages: number;
  range?: number;
  searchParams: Record<string, string>;
};

export function Pagination({
  className,
  page: current,
  pages,
  searchParams,
  range = 5,
}: PaginationProps) {
  const router = useRouter();

  const visiblePages: number[] = [];

  const offset = Math.floor(range / 2);
  let left = current - 1;
  let right = current;

  const onPageChange = (page: number) => {
    const next = new URLSearchParams(searchParams);
    next.set("offset", page.toString());
    router.push(`?${next}`);
  };

  for (let i = 0; i < range && i < pages; i++) {
    if (
      right <= Math.min(current + offset + Math.max(0, offset - current), pages)
    ) {
      visiblePages.push(right++);
    } else if (
      left >=
      Math.max(0, current - offset - Math.max(offset - (pages - current), 0))
    ) {
      visiblePages.splice(0, 0, left--);
    } else {
      break;
    }
  }

  return (
    <div className={clsx("flex items-center justify-center gap-20", className)}>
      <button
        className="font-semibold disabled:text-neutral-400"
        disabled={visiblePages[0] === 0}
        onClick={() => onPageChange(current - 1)}
      >
        Назад
      </button>
      <div className="flex items-center gap-5">
        {visiblePages.map((page) => (
          <button
            className={clsx(
              "px-2 font-semibold",
              current === page && "relative text-white",
            )}
            key={page}
            onClick={() => onPageChange(page)}
          >
            {page + 1}
            {current === page ? (
              <div className="absolute left-1/2 top-1/2 -z-10 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-md bg-zinc-800" />
            ) : null}
          </button>
        ))}
      </div>
      <button
        className="font-semibold disabled:text-neutral-400"
        disabled={visiblePages.at(-1) === pages - 1}
        onClick={() => onPageChange(current + 1)}
      >
        Вперед
      </button>
    </div>
  );
}
