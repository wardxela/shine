import Image from "next/image";
import Link from "next/link";

export type ProductFavoriteCardProps = {
  image: string;
  title: string;
  price: number;
  href: string;
  oldPrice?: number | null;
};

export function ProductFavoriteCard({
  image,
  title,
  href,
  price,
  oldPrice,
}: ProductFavoriteCardProps) {
  return (
    <article className="flex flex-col items-center text-center">
      <div className="relative mb-3 max-h-96 self-stretch pb-[75%] sm:max-h-none md:pb-[144%]">
        <Link href={href}>
          <Image
            unoptimized
            src={image}
            className="absolute left-0 top-0 h-full w-full object-cover"
            fill
            alt={title}
          />
        </Link>
      </div>
      <h6 className="mb-2 text-xl">{title}</h6>
      <p className="space-x-2">
        <span className="text-stone-950 text-opacity-75">{price} руб.</span>
        {oldPrice ? (
          <span className="text-stone-500 text-opacity-50 line-through">
            {oldPrice} руб.
          </span>
        ) : null}
      </p>
    </article>
  );
}
