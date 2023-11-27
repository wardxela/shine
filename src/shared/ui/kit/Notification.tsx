"use client";

import { useEffect, useState } from "react";
import { clsx } from "../clsx";

export type NotificationProps = {
  title: string;
  message: string;
  type: "error" | "success";
};

export function Notification(props: NotificationProps) {
  return <NotificationInternal key={Math.random()} {...props} />;
}

export function NotificationInternal({
  title,
  message,
  type,
}: NotificationProps) {
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShouldShow(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!shouldShow) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-sm md:bottom-8 md:left-auto md:right-8">
      <div
        className={clsx("rounded-md p-4", {
          "bg-red-500": type === "error",
          "bg-green-600": type === "success",
        })}
      >
        <h6 className="mb-1 text-sm font-semibold text-white">{title}</h6>
        <p className="text-sm text-white">{message}</p>
      </div>
    </div>
  );
}
