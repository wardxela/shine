"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "@/shared/assets/logo.svg";
import darkLogo from "@/shared/assets/logo-dark.svg";

import { clsx } from "./clsx";
import { usePathname } from "next/navigation";

export type LogoLinkProps = {
  className?: string;
  isDark?: boolean;
};

export function LogoLink({ className, isDark = false }: LogoLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      className={clsx(className, "group flex items-center gap-3 font-bold")}
    >
      <Image src={isDark ? darkLogo : logo} alt="SHINE" />
      <span
        className={clsx(
          "group-hover:text-red-700",
          isDark && "text-white",
          pathname === "/" && "text-red-700",
        )}
      >
        SHINE
      </span>
    </Link>
  );
}
