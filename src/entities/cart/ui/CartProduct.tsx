import { api } from "@/trpc/server";
import { revalidatePath } from "next/cache";
import Image from "next/image";

export type CartProductProps = {
  id: number;
  name: string;
  img: string;
  price: number;
  description: string;
  count: number;
};

export function CartProduct({
  id,
  name,
  img,
  price,
  description,
  count,
}: CartProductProps) {
  const removeFromCart = async () => {
    "use server";
    await api.cart.remove.mutate({ productId: id });
    revalidatePath("/cart");
  };

  return (
    <article>
      <h6 className="mb-4 text-sm font-semibold">{name}</h6>
      <div className="grid gap-5 sm:grid-cols-[200px,1fr]">
        <div className="relative aspect-square">
          <Image
            unoptimized
            src={img}
            alt={name}
            fill
            className="absolute left-0 top-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between gap-4">
          <p className="text-sm text-stone-700">{description}</p>
          <div className="flex flex-wrap items-center justify-between">
            <b>{price} руб.</b>
            <div className="flex items-center gap-7">
              <form action={removeFromCart} className="flex items-center">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="21"
                    viewBox="0 0 17 21"
                    fill="none"
                    className="h-full"
                  >
                    <path d="M0 3.42089L16.5088 3.42089" stroke="#3E3E3E" />
                    <path
                      d="M1.95508 3.42089L3.04118 18.9522C3.186 19.278 3.73629 19.9297 4.77895 19.9297C5.82161 19.9297 10.2819 19.9297 12.3817 19.9297C12.7075 19.9297 13.4026 19.6256 13.5764 18.4091C13.7502 17.1927 14.4453 7.91012 14.7711 3.42089"
                      stroke="#3E3E3E"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.4838 1.21777H8.39866H9.20286L9.20305 1.22219C9.7854 1.19714 10.1262 1.28246 10.3247 1.38726C10.5067 1.48335 10.6021 1.61268 10.6615 1.77627C10.7275 1.95823 10.7484 2.18316 10.7517 2.45581C10.7524 2.51678 10.752 2.5851 10.7516 2.65731V2.65732V2.65733C10.7504 2.86165 10.749 3.09708 10.7727 3.28513L11.7649 3.15979C11.7498 3.04044 11.7506 2.91149 11.7517 2.74109V2.74102V2.741C11.7523 2.65409 11.753 2.5564 11.7516 2.4437C11.748 2.14914 11.7277 1.78308 11.6015 1.43519C11.4686 1.06893 11.2207 0.729547 10.7916 0.50297C10.4953 0.346488 10.1343 0.255303 9.70199 0.227199V0.217773H8.39866H7.09534V0.226582C6.71939 0.255058 6.39824 0.353206 6.1337 0.527813C5.76388 0.771912 5.57029 1.12187 5.47031 1.46634C5.37334 1.80042 5.35721 2.15333 5.35439 2.44491C5.35336 2.55143 5.35384 2.64629 5.35428 2.73231C5.35518 2.90771 5.35589 3.04635 5.34317 3.17218L6.3381 3.27274C6.35639 3.09173 6.35534 2.86773 6.35439 2.66516C6.35405 2.59105 6.35371 2.51981 6.35434 2.45459C6.35701 2.17895 6.37384 1.94088 6.43067 1.7451C6.48448 1.55972 6.56553 1.44097 6.68456 1.36241C6.79445 1.28988 6.98626 1.219 7.32514 1.21777H7.34314C7.38744 1.21793 7.43421 1.21927 7.48358 1.22192L7.4838 1.21777Z"
                      fill="#3E3E3E"
                    />
                    <path
                      d="M5.75586 6.46198V16.78M8.2539 6.46198V16.78"
                      stroke="#3E3E3E"
                    />
                    <path d="M10.8613 6.46198V16.78" stroke="#3E3E3E" />
                  </svg>
                </button>
              </form>
              {/* <div className="flex items-center gap-4">
                <button type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="9"
                      stroke="black"
                      strokeWidth="2"
                    />
                    <rect
                      x="4"
                      y="9"
                      width="12"
                      height="2"
                      rx="1"
                      fill="black"
                    />
                  </svg>
                </button>
                <div className="leading-none">{count}</div>
                <button type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="9"
                      stroke="black"
                      strokeWidth="2"
                    />
                    <rect
                      x="4"
                      y="9"
                      width="12"
                      height="2"
                      rx="1"
                      fill="black"
                    />
                    <rect
                      x="11"
                      y="4"
                      width="12"
                      height="2"
                      rx="1"
                      transform="rotate(90 11 4)"
                      fill="black"
                    />
                  </svg>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
