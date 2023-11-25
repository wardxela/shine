import Image, { StaticImageData } from "next/image";

export type ProductCardProps = {
  image: StaticImageData;
  title: string;
  price: number;
  oldPrice: number | null;
  isNew: boolean;
  hasDiscount: boolean;
};

export function ProductCard({
  image,
  title,
  price,
  oldPrice,
  isNew,
  hasDiscount,
}: ProductCardProps) {
  return (
    <article>
      <div className="mb-2">
        <Image src={image} alt={title} />
      </div>
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
