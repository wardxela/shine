import { Button, Checkbox } from "@/shared/ui/kit";

import Image from "next/image";
import { api } from "@/trpc/server";
import { notFound } from "next/navigation";
import { getServerAuthSession } from "@/server/auth";
import { clsx } from "@/shared/ui/clsx";
import { revalidatePath } from "next/cache";

export type ProductPageProps = {
  params: { id: string };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const id = +params.id;

  if (Number.isNaN(id)) {
    notFound();
  }

  const product = await api.product.getById.query({ id });

  if (!product) {
    notFound();
  }

  const session = await getServerAuthSession();

  const isAuth = !!session?.user;

  return (
    <div className="mx-auto w-full max-w-4xl">
      <main className="container flex flex-col pt-10 sm:flex-row sm:gap-8">
        <div className="w-full flex-shrink-0 self-center sm:basis-60 md:basis-72">
          <div className="relative pb-[140%]">
            <Image
              src={product.image}
              alt="product"
              className="absolute left-0 top-0 h-full w-full object-cover"
              fill
            />
          </div>
        </div>
        <div className="flex max-w-3xl flex-grow flex-col py-8">
          <h1 className="mb-4 text-3xl font-bold">{product.title}</h1>
          <p className="mb-4 flex gap-4 text-2xl">
            <span className="font-bold text-amber-600">
              {product.price} руб.
            </span>
            {product.oldPrice ? (
              <span className="text-lg text-stone-400 line-through">
                {product.oldPrice} руб.
              </span>
            ) : null}
          </p>
          <p className="mb-10 text-sm text-stone-600">{product.description}</p>
          <div className="mb-10">
            <dl className="flex flex-wrap justify-between text-sm">
              <div className="basis-1/3 space-y-3 pr-2">
                <dt className="text-stone-500">Категории</dt>
                <dd className="font-bold">
                  {product.categories.length > 0
                    ? product.categories.map((c) => c.name).join(", ")
                    : "-"}
                </dd>
              </div>
              <div className="basis-1/3 space-y-3 pr-2">
                <dt className="text-stone-500">Бренды</dt>
                <dd className="font-bold">
                  {product.brands.length > 0
                    ? product.brands.map((b) => b.name).join(", ")
                    : "-"}
                </dd>
              </div>
              <div className="basis-1/3 space-y-3 pr-2">
                <dt className="text-stone-500">Цвета</dt>
                <dd className="font-bold">
                  {product.brands.length > 0
                    ? product.colors.map((color) => (
                        <div
                          key={color.id}
                          style={{ backgroundColor: color.name }}
                          className="h-3 w-3 rounded-full"
                        />
                      ))
                    : "-"}
                </dd>
              </div>
            </dl>
          </div>
          <Button
            disabled={!isAuth}
            variant="primary"
            className="mt-auto max-w-xs"
          >
            Добавить в корзину
          </Button>
        </div>
      </main>
      <section className="py-10">
        <div className="container">
          <h2 className="mb-5 text-2xl font-bold">Отзывы о товаре</h2>
          <div className="mb-10">
            <LeaveComment productId={product.id} isAuth={isAuth} />
          </div>
          {product.comments.length ? (
            <div className="max-w-2xl space-y-8">
              {product.comments.map((comment) => (
                <Comment
                  key={comment.id}
                  author={comment.user.name + " " + comment.user.lastName}
                  message={comment.message}
                  isPositive={comment.isPositive}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-lg font-semibold">
              Этот товар еще не имеет отзывов. Оставьте его первым!
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export type LeaveCommentProps = {
  isAuth: boolean;
  productId: number;
};

function LeaveComment({ isAuth, productId }: LeaveCommentProps) {
  async function handleComment(data: FormData) {
    "use server";

    await api.product.leaveComment.mutate({
      productId,
      isPositive: !!data.get("is_positive"),
      message: data.get("message")!.toString(),
    });

    revalidatePath(`/catalog/${productId}`);
  }

  return (
    <form action={handleComment} className="flex flex-col space-y-6">
      <label className="flex flex-col gap-5">
        <span className="font-semibold">Ваш отзыв</span>
        <textarea
          disabled={!isAuth}
          name="message"
          className="resize-none rounded-sm p-2 text-sm text-stone-900 ring-1 ring-stone-600 disabled:opacity-50"
          rows={6}
          placeholder="Качественный, удобный и привлекательный."
        ></textarea>
      </label>
      <Checkbox name="is_positive" disabled={!isAuth} label="Положительный" />
      <div className="max-w-xs">
        <Button variant="primary" disabled={!isAuth}>
          Отправить
        </Button>
      </div>
      {!isAuth ? (
        <p className="text-red-500">Чтобы оставить отзыв, войдите в аккаунт</p>
      ) : null}
    </form>
  );
}

type CommentProps = {
  author: string;
  message: string;
  isPositive: boolean;
};

function Comment({ author, message, isPositive }: CommentProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 basis-12">
        <div className="grid aspect-square place-items-center rounded-full bg-slate-200 text-xl font-semibold text-slate-800">
          {author[0]}
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="mb-2 font-bold">{author}</h3>
        <p className="mb-4 text-sm">{message}</p>
        <p
          className={clsx("mr-auto rounded-xl px-2 py-1 text-xs ring-1", {
            "text-red-500 ring-red-500": !isPositive,
            "text-green-500 ring-green-500": isPositive,
          })}
        >
          {isPositive ? "Положительный" : "Отрицательный"}
        </p>
      </div>
    </div>
  );
}
