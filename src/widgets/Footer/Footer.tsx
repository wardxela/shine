import { FooterSiteLink } from "./FooterSiteLink";
import { LogoLink } from "@/shared/ui/LogoLink";

export function Footer() {
  return (
    <footer className="mt-auto bg-stone-900 py-14">
      <div className="container">
        <div className="mb-14 grid grid-cols-[2fr,5fr,2fr]">
          <div>
            <LogoLink isDark className="mb-3" />
            <p className="max-w-[228px] text-stone-400">
              Шьем одежду на заказ по индивидуальным меркам и предпочтениям
              клиента
            </p>
          </div>
          <div>
            <div className="mx-auto w-max">
              <h5 className="mb-5 font-semibold text-white">Навигация</h5>
              <div className="flex gap-14">
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
                  <li>
                    <FooterSiteLink href="/profile">
                      Личный кабинет
                    </FooterSiteLink>
                  </li>
                  <li>
                    <FooterSiteLink href="/cart">Корзина</FooterSiteLink>
                  </li>
                  <li>
                    <FooterSiteLink href="/login">Войти</FooterSiteLink>
                  </li>
                  <li>
                    <FooterSiteLink href="/register">
                      Зарегистрироваться
                    </FooterSiteLink>
                  </li>
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
                >
                  ВКонтакте
                </a>
              </li>
              <li>
                <a
                  className="text-stone-400 hover:text-stone-200"
                  href="https://t.me/wardxela"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  className="text-stone-400 hover:text-stone-200"
                  href="https://www.youtube.com/channel/UCYnEbUWhqWxc93u8VIme_wQ"
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
