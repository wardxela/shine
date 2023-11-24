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
      <div className="relative mb-3 max-h-96 self-stretch pb-[75%] sm:max-h-none md:pb-[144%]">
        <Image
          src={image}
          className="absolute left-0 top-0 h-full w-full object-cover"
          alt={title}
        />
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
