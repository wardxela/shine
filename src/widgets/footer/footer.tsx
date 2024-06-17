import { Session } from "next-auth";
import { FooterLink } from "./footer-link";
import { LogoLink } from "@/shared/ui-old/LogoLink";

export type FooterProps = {
  session: Session | null;
};

export function Footer({ session }: FooterProps) {
  const isAuthenticated = !!session;

  return (
    <footer className="mt-auto bg-neutral-950 py-20">
      <div className="container">
        <div className="mb-14 grid gap-12 md:grid-cols-[11fr,15fr,11fr] lg:grid-cols-[1fr,2fr,1fr]">
          <div>
            <LogoLink isDark className="mb-3" />
            <p className="w-full leading-relaxed text-neutral-400">
              Шьем одежду на заказ по индивидуальным меркам и предпочтениям
              клиента
            </p>
          </div>
          <div>
            <div className="w-max md:mx-auto">
              <h5 className="mb-7 font-semibold text-white">Навигация</h5>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-14">
                <ul className="space-y-3">
                  <li>
                    <FooterLink href="/">Главная</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="/catalog">Каталог</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="/about">О нас</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="/contacts">Контакты</FooterLink>
                  </li>
                </ul>
                <ul className="space-y-2">
                  {isAuthenticated ? (
                    <>
                      <li>
                        <FooterLink href="/profile">Личный кабинет</FooterLink>
                      </li>
                      <li>
                        <FooterLink href="/cart">Корзина</FooterLink>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <FooterLink href="/login">Войти</FooterLink>
                      </li>
                      <li>
                        <FooterLink href="/register">
                          Зарегистрироваться
                        </FooterLink>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h5 className="mb-7 font-semibold text-white">Соц. сети</h5>
            <ul className="space-y-3">
              <li>
                <a
                  className="inline-flex items-center gap-2 text-stone-400 hover:text-stone-200"
                  href="https://vk.com/wardxela"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z" />
                  </svg>
                  ВКонтакте
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 text-stone-400 hover:text-stone-200"
                  href="https://t.me/wardxela"
                  target="_blank"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                    style={{
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 1.41421,
                    }}
                  >
                    <path
                      id="telegram-4"
                      d="M12,0c-6.626,0 -12,5.372 -12,12c0,6.627 5.374,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.628 -5.373,-12 -12,-12Zm3.224,17.871c0.188,0.133 0.43,0.166 0.646,0.085c0.215,-0.082 0.374,-0.267 0.422,-0.491c0.507,-2.382 1.737,-8.412 2.198,-10.578c0.035,-0.164 -0.023,-0.334 -0.151,-0.443c-0.129,-0.109 -0.307,-0.14 -0.465,-0.082c-2.446,0.906 -9.979,3.732 -13.058,4.871c-0.195,0.073 -0.322,0.26 -0.316,0.467c0.007,0.206 0.146,0.385 0.346,0.445c1.381,0.413 3.193,0.988 3.193,0.988c0,0 0.847,2.558 1.288,3.858c0.056,0.164 0.184,0.292 0.352,0.336c0.169,0.044 0.348,-0.002 0.474,-0.121c0.709,-0.669 1.805,-1.704 1.805,-1.704c0,0 2.084,1.527 3.266,2.369Zm-6.423,-5.062l0.98,3.231l0.218,-2.046c0,0 3.783,-3.413 5.941,-5.358c0.063,-0.057 0.071,-0.153 0.019,-0.22c-0.052,-0.067 -0.148,-0.083 -0.219,-0.037c-2.5,1.596 -6.939,4.43 -6.939,4.43Z"
                    />
                  </svg>
                  Telegram
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 text-stone-400 hover:text-stone-200"
                  href="https://www.youtube.com/channel/UCYnEbUWhqWxc93u8VIme_wQ"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    className="fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z" />
                  </svg>
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-white">SHINE, 2023 Все права защищены</p>
      </div>
    </footer>
  );
}
