import Image from "next/image";
import Link from "next/link";

export type ProductCardProps = {
  image: string;
  title: string;
  price: number;
  oldPrice: number | null;
  isNew: boolean;
  hasDiscount: boolean;
  href: string;
};

export function ProductCard({
  image,
  title,
  price,
  oldPrice,
  href,
  isNew,
  hasDiscount,
}: ProductCardProps) {
  return (
    <article className="relative">
      <div className="relative mb-2 pb-[140%]">
        <Link href={href}>
          <Image className="object-cover" src={image} alt={title} fill />
        </Link>
      </div>
      {hasDiscount ? (
        <div className="absolute right-2 top-2 bg-red-600 px-2 py-1 text-xs font-semibold text-white">
          СКИДКА
        </div>
      ) : isNew ? (
        <div className="absolute right-2 top-2 bg-emerald-600 px-2 py-1 text-xs font-semibold text-white">
          НОВИНКА
        </div>
      ) : null}
      <div className="mb-2 flex items-center justify-between gap-2">
        <h6 className="text-stone-950">{title}</h6>
      </div>
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className="font-semibold text-stone-700">{price} руб.</span>
        <span className="text-stone-400 line-through">{oldPrice} руб.</span>
      </div>
    </article>
  );
}
