"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/ui/components/pagination";
import clsx from "clsx";
import { usePathname, useSearchParams } from "next/navigation";

export type CatalogPaginationProps = {
  page: number;
  pages: number;
};

// TODO: support long pagination
export function CatalogPagination({ page, pages }: CatalogPaginationProps) {
  const path = usePathname();
  const searchParams = useSearchParams();

  console.log(pages);

  const urLSearchParams = new URLSearchParams(searchParams);

  urLSearchParams.set("offset", (page - 1).toString());
  const prevHref = `${path}?${urLSearchParams}`;
  urLSearchParams.set("offset", (page + 1).toString());
  const nextHref = `${path}?${urLSearchParams}`;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={prevHref} />
        </PaginationItem>
        {Array.from({ length: pages }).map((_, i) => {
          urLSearchParams.set("offset", i.toString());
          return (
            <PaginationItem key={i}>
              <PaginationLink
                href={`${path}?${urLSearchParams}`}
                className={clsx({
                  "bg-neutral-200": i === page,
                })}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationNext href={nextHref} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
