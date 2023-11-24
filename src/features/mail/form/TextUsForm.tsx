"use client";

import { useId } from "react";
import { clsx } from "@/shared/ui/clsx";

export type TextUsFormProps = {
  className?: string;
};

export function TextUsForm({ className }: TextUsFormProps) {
  const nameId = useId();
  const emailId = useId();
  const textAreaId = useId();

  return (
    <form action="#" className={clsx(className, "space-y-6")}>
      <div>
        <label
          htmlFor={nameId}
          className="mb-1 block pl-2 text-orange-200 lg:text-stone-400"
        >
          Имя
        </label>
        <input
          id={nameId}
          type="text"
          name="name"
          className="w-full min-w-0 max-w-[250px] border-b border-stone-500 bg-transparent p-2 text-sm text-stone-200 outline-none placeholder:text-orange-100 placeholder:text-opacity-40 focus:border-b-amber-600 lg:placeholder:text-stone-600 lg:placeholder:text-opacity-100"
          placeholder="Александр"
        />
      </div>
      <div>
        <label
          htmlFor={emailId}
          className="mb-1 block pl-2 text-orange-200 lg:text-stone-400"
        >
          Почта
        </label>
        <input
          id={emailId}
          type="email"
          name="email"
          className="w-full min-w-0 max-w-[250px] border-b border-stone-500 bg-transparent p-2 text-sm text-stone-200 outline-none placeholder:text-orange-100 placeholder:text-opacity-40 focus:border-b-amber-600 lg:placeholder:text-stone-600 lg:placeholder:text-opacity-100"
          placeholder="example@example.com"
        />
      </div>
      <div>
        <label
          htmlFor={textAreaId}
          className="mb-1 block pl-2 text-orange-200 lg:text-stone-400"
        >
          Сообщение
        </label>
        <textarea
          id={textAreaId}
          name="message"
          className="w-full min-w-0 max-w-sm border border-b border-stone-500 bg-transparent p-2 text-sm text-stone-200 outline-none placeholder:text-orange-100 placeholder:text-opacity-40 focus:border-b-amber-600 lg:placeholder:text-stone-600 lg:placeholder:text-opacity-100"
          placeholder="Помогите исправить брак на брюках..."
          rows={4}
        />
      </div>
      <button className="bg-white px-10 py-3">Отправить</button>
    </form>
  );
}
