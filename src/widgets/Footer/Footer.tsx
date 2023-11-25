import { Session } from "next-auth";
import { FooterSiteLink } from "./FooterSiteLink";
import { LogoLink } from "@/shared/ui/LogoLink";

export type FooterProps = {
  session: Session | null;
};

export function Footer({ session }: FooterProps) {
  const isAuthenticated = !!session;

  return (
    <footer className="mt-auto bg-stone-900 py-14">
      <div className="container">
        <div className="mb-14 grid gap-12 md:grid-cols-[11fr,15fr,11fr] lg:grid-cols-[1fr,2fr,1fr]">
          <div>
            <LogoLink isDark className="mb-3" />
            <p className="max-w-[228px] text-stone-400">
              Шьем одежду на заказ по индивидуальным меркам и предпочтениям
              клиента
            </p>
          </div>
          <div>
            <div className="w-max md:mx-auto">
              <h5 className="mb-5 font-semibold text-white">Навигация</h5>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-14">
                <ul className="space-y-2">
                  <li>
                    <FooterSiteLink href="/">Главная</FooterSiteLink>
                  </li>
                  <li>
                    <FooterSiteLink href="/catalog">Каталог</FooterSiteLink>
                  </li>
                  <li>
                    <FooterSiteLink href="/about">О нас</FooterSiteLink>
                  </li>
                  <li>
                    <FooterSiteLink href="/contacts">Контакты</FooterSiteLink>
                  </li>
                </ul>
                <ul className="space-y-2">
                  {isAuthenticated ? (
                    <>
                      <li>
                        <FooterSiteLink href="/profile">
                          Личный кабинет
                        </FooterSiteLink>
                      </li>
                      <li>
                        <FooterSiteLink href="/cart">Корзина</FooterSiteLink>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <FooterSiteLink href="/login">Войти</FooterSiteLink>
                      </li>
                      <li>
                        <FooterSiteLink href="/register">
                          Зарегистрироваться
                        </FooterSiteLink>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h5 className="mb-5 font-semibold text-white">Соц. сети</h5>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-stone-400 hover:text-stone-200"
                  href="https://vk.com/wardxela"
                  target="_blank"
                >
                  ВКонтакте
                </a>
              </li>
              <li>
                <a
                  className="text-stone-400 hover:text-stone-200"
                  href="https://t.me/wardxela"
                  target="_blank"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  className="text-stone-400 hover:text-stone-200"
                  href="https://www.youtube.com/channel/UCYnEbUWhqWxc93u8VIme_wQ"
                  target="_blank"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-white">ШАЙН, 2023 Все права защищены</p>
      </div>
    </footer>
  );
}
