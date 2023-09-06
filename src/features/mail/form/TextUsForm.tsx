"use client";

import { clsx } from "@/shared/ui/clsx";
import { useId } from "react";

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
        <label htmlFor={nameId} className="mb-1 block pl-2 text-stone-400">
          Имя
        </label>
        <input
          id={nameId}
          type="text"
          name="name"
          className="w-full min-w-0 max-w-[250px] border-b border-stone-500 bg-transparent p-2 text-sm text-stone-200 outline-none placeholder:text-stone-600 focus:border-b-amber-600"
          placeholder="Александр"
        />
      </div>
      <div>
        <label htmlFor={emailId} className="mb-1 block pl-2 text-stone-400">
          Почта
        </label>
        <input
          id={emailId}
          type="email"
          name="email"
          className="w-full min-w-0 max-w-[250px] border-b border-stone-500 bg-transparent p-2 text-sm text-stone-200 outline-none placeholder:text-stone-600 focus:border-b-amber-600"
          placeholder="example@example.com"
        />
      </div>
      <div>
        <label htmlFor={textAreaId} className="mb-2 block pl-2 text-stone-400">
          Сообщение
        </label>
        <textarea
          id={textAreaId}
          name="message"
          className="w-full min-w-0 max-w-sm border border-stone-500 bg-transparent p-2 text-sm text-stone-200 outline-none placeholder:text-stone-600 focus:border-amber-600"
          placeholder="Помогите исправить брак на брюках..."
        />
      </div>
      <button className="bg-white px-10 py-3">Отправить</button>
    </form>
  );
}
