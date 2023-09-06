export default function CatalogPage() {
  return (
    <main className="pb-14 pt-10">
      <div className="container flex gap-10">
        <div className="shrink-0 basis-56">
          <h2 className="text-xl font-semibold">Категории</h2>
        </div>
        <div>
          <h1 className="text-xl font-semibold">
            <span className="mb-7 text-amber-600">99</span> <span>товаров</span>
          </h1>
        </div>
      </div>
    </main>
  );
}

type ProductCardProps = {
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  isNew: boolean;
  hasDiscount: boolean;
};

function ProductCard() {}

export const metadata = {
  title: "Каталог",
  description: "Каталог одежды ШАЙН",
};
