import Image from "next/image";
import Link from "next/link";
import logo from "@/shared/assets/logo.svg";
import { HeaderNavLink } from "./HeaderNavLink";

export function Header() {
  return (
    <header>
      <div className="container">
        <div className="flex h-20 items-center">
          <Link href="/" className="flex items-center gap-3 font-bold">
            <Image src={logo} alt="SHINE" />
            <span>ШАЙН</span>
          </Link>
          <nav className="ml-14">
            <ul className="flex items-center gap-10">
              <li>
                <HeaderNavLink href="/">Главная</HeaderNavLink>
              </li>
              <li>
                <HeaderNavLink href="/catalog">Каталог</HeaderNavLink>
              </li>
              <li>
                <HeaderNavLink href="/about">О нас</HeaderNavLink>
              </li>
              <li>
                <HeaderNavLink href="/contacts">Контакты</HeaderNavLink>
              </li>
            </ul>
          </nav>
          <div className="ml-auto">
            <Link href="/login" className="px-4 py-2">
              Войти
            </Link>
            <Link
              href="/register"
              className="bg-stone-900 px-4 py-2 text-white"
            >
              Зарегистрироваться
            </Link>
          </div>
          <div className="ml-14 flex items-center gap-6">
            <button>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="9.72342" cy="5.23404" r="5.23404" fill="black" />
                <path
                  d="M17.6997 20.5H2.0994C1.50979 20.5 1.0455 19.9915 1.12287 19.407C1.79677 14.3161 3.68517 12.2332 10.1596 12.2128C16.6158 12.1924 17.7261 14.1474 18.6785 19.3332C18.7903 19.9419 18.3186 20.5 17.6997 20.5Z"
                  fill="black"
                  stroke="black"
                />
              </svg>
            </button>
            <button>
              <svg
                width="20"
                height="17"
                viewBox="0 0 20 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="&#208;&#154;&#208;&#190;&#209;&#128;&#208;&#183;&#208;&#184;&#208;&#189;&#208;&#176;">
                  <path
                    id="Vector 1"
                    d="M4.15287 0.5H1.25C0.835786 0.5 0.5 0.835786 0.5 1.25C0.5 1.66421 0.835787 2 1.25 2H3.2274C3.68247 2 4.08015 2.30725 4.19502 2.74758L6.80498 12.7524C6.91985 13.1928 7.31753 13.5 7.7726 13.5H17.5C17.7761 13.5 18 13.2761 18 13C18 12.7239 17.7761 12.5 17.5 12.5H9.04057C8.71775 12.5 8.43114 12.2934 8.32906 11.9872C8.16717 11.5015 8.52865 11 9.04057 11H16.2792C16.7097 11 17.0918 10.7246 17.2279 10.3162L19.0613 4.81623C19.2771 4.1687 18.7951 3.5 18.1126 3.5H6.34713C5.85829 3.5 5.4411 3.14659 5.36073 2.6644L5.13927 1.3356C5.0589 0.853413 4.64171 0.5 4.15287 0.5Z"
                    fill="black"
                    stroke="black"
                  />
                  <circle id="Ellipse 1" cx="10" cy="16" r="1" fill="black" />
                  <circle id="Ellipse 2" cx="15" cy="16" r="1" fill="black" />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
