import Image from "next/image";
import bgImg from "./_img/bg.jpg";

export default function ContactsPage() {
  return (
    <main>
      <section className="relative mb-10 flex h-96 md:mb-24 lg:mb-36 lg:h-screen">
        <Image
          src={bgImg}
          alt="Контакты"
          className="absolute left-0 top-0 -z-10 h-full w-full object-cover brightness-50"
        />
        <div className="m-auto text-center">
          <h1 className="mb-5 text-4xl font-bold text-white md:text-6xl">
            Контакты
          </h1>
          <p className="text-white md:text-xl">
            Свяжись с нами удобным способом
          </p>
        </div>
      </section>
      <div className="container mb-24 flex flex-wrap justify-around gap-10 md:gap-24 lg:mb-36">
        <div className="flex basis-80 flex-col items-center">
          <div className="mb-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
            >
              <g clipPath="url(#clip0_30_1531)">
                <path
                  d="M10.7218 1.57013L10.7225 1.56996C11.6617 1.31337 12.6381 1.76263 13.0572 2.62444L13.1086 2.74776L16.6242 11.1853L16.6244 11.1859C16.9665 12.0059 16.731 12.9513 16.0399 13.5163C16.0399 13.5163 16.0399 13.5163 16.0399 13.5164L11.7069 17.0583L10.7987 17.8007L11.3003 18.861C14.3754 25.3622 19.6377 30.6245 26.1389 33.6996L27.1979 34.2006L27.9405 33.2944L31.4913 28.9614L31.4913 28.9614L31.4965 28.955C32.0494 28.2726 32.9991 28.0319 33.8229 28.3755L33.8235 28.3758L42.261 31.8914L42.2641 31.8927C43.1981 32.2794 43.6974 33.2986 43.43 34.2775L43.4298 34.2781L41.3216 42.0083C41.3214 42.0091 41.3212 42.0099 41.3209 42.0107C41.0764 42.8931 40.2763 43.4999 39.375 43.4999C18.4593 43.4999 1.5 26.5406 1.5 5.62494C1.5 4.72343 2.10711 3.92323 2.98984 3.67885C2.99045 3.67868 2.99106 3.67852 2.99167 3.67835L10.7218 1.57013Z"
                  stroke="#815120"
                  strokeWidth="3"
                />
              </g>
              <defs>
                <clipPath id="clip0_30_1531">
                  <rect width="45" height="45" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h4 className="mb-3 text-2xl">Телефон</h4>
          <ul className="text-center">
            <li>
              <a
                className="text-xl leading-9 text-stone-500"
                href="tel:8 800 555 35 35"
              >
                Основной: <span className="underline">8 800 555 35 35</span>
              </a>
            </li>
            <li>
              <a
                className="text-xl leading-9 text-stone-500"
                href="tel:8 800 555 25 25"
              >
                Запасной: <span className="underline">8 800 555 25 25</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex basis-80 flex-col items-center">
          <div className="mb-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="60"
              viewBox="0 0 45 60"
              fill="none"
            >
              <g clipPath="url(#clip0_30_1549)">
                <path
                  d="M43.5 22.5C43.5 24.7653 42.7314 27.6078 41.3818 30.8046C40.0428 33.9765 38.1829 37.3799 36.1162 40.7324C31.9842 47.4352 27.0975 53.8192 24.107 57.5617C23.2662 58.6057 21.7338 58.6057 20.893 57.5617C17.9025 53.8192 13.0158 47.4352 8.88381 40.7324C6.81714 37.3799 4.95724 33.9765 3.61817 30.8046C2.26863 27.6078 1.5 24.7653 1.5 22.5C1.5 10.9066 10.9066 1.5 22.5 1.5C34.0934 1.5 43.5 10.9066 43.5 22.5ZM28.864 16.136C27.1761 14.4482 24.8869 13.5 22.5 13.5C20.1131 13.5 17.8239 14.4482 16.136 16.136C14.4482 17.8239 13.5 20.1131 13.5 22.5C13.5 24.8869 14.4482 27.1761 16.136 28.864C17.8239 30.5518 20.1131 31.5 22.5 31.5C24.8869 31.5 27.1761 30.5518 28.864 28.864C30.5518 27.1761 31.5 24.8869 31.5 22.5C31.5 20.1131 30.5518 17.8239 28.864 16.136Z"
                  stroke="#815120"
                  strokeWidth="3"
                />
              </g>
              <defs>
                <clipPath id="clip0_30_1549">
                  <rect width="45" height="60" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h4 className="mb-3 text-2xl">Адрес</h4>
          <p className="text-center text-xl leading-9 text-stone-500">
            Московская область, город Москва, пл. Балканская, 67
          </p>
        </div>
        <div className="flex basis-80 flex-col items-center">
          <div className="mb-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="69"
              height="69"
              viewBox="0 0 69 69"
              fill="none"
            >
              <path
                d="M7.5 17.625C6.46875 17.625 5.625 18.4688 5.625 19.5V22.0898L25.8398 38.6836C28.2656 40.6758 31.7461 40.6758 34.1719 38.6836L54.375 22.0898V19.5C54.375 18.4688 53.5312 17.625 52.5 17.625H7.5ZM5.625 29.3672V49.5C5.625 50.5312 6.46875 51.375 7.5 51.375H52.5C53.5312 51.375 54.375 50.5312 54.375 49.5V29.3672L37.7344 43.0312C33.2344 46.7227 26.7539 46.7227 22.2656 43.0312L5.625 29.3672ZM0 19.5C0 15.3633 3.36328 12 7.5 12H52.5C56.6367 12 60 15.3633 60 19.5V49.5C60 53.6367 56.6367 57 52.5 57H7.5C3.36328 57 0 53.6367 0 49.5V19.5Z"
                fill="#815120"
              />
            </svg>
          </div>
          <h4 className="mb-3 text-2xl">Почта</h4>
          <ul className="text-center">
            <li>
              <a
                className="text-xl leading-9 text-stone-500"
                href="mailto:shine@shine.com"
              >
                Основная: <span className="underline">shine@shine.com</span>
              </a>
            </li>
            <li>
              <a
                className="text-xl leading-9 text-stone-500"
                href="mailto:blessme@shine.com"
              >
                Запасная: <span className="underline">blessme@shine.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mb-24">
        <div className="relative overflow-hidden">
          <iframe
            src="https://yandex.com/map-widget/v1/?ll=39.764155%2C54.605016&mode=poi&poi%5Bpoint%5D=39.757432%2C54.621241&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1118277251&z=12.72"
            height="400"
            allowFullScreen={true}
            className="relative h-[700px] w-full"
          ></iframe>
        </div>
      </div>
    </main>
  );
}

export const metadata = {
  title: "Контакты",
  description: "Свяжись с нами удобным способом",
};
