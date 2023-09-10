import Image, { StaticImageData } from "next/image";

export type ProductFavoriteCardProps = {
  image: StaticImageData;
  title: string;
  price: number;
  oldPrice: number;
};

export function ProductFavoriteCard({
  image,
  title,
  price,
  oldPrice,
}: ProductFavoriteCardProps) {
  return (
    <article className="flex flex-col items-center text-center">
      <div className="mb-3 self-stretch">
        <Image src={image} className="w-full" alt={title} />
      </div>
      <h6 className="mb-2 text-xl">{title}</h6>
      <p className="space-x-2">
        <span className="text-stone-950 text-opacity-75">{price} руб.</span>
        <span className="text-stone-500 text-opacity-50 line-through">
          {oldPrice} руб.
        </span>
      </p>
    </article>
  );
}
