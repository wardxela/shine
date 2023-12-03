import { TextField } from "@/entities/profile";
import { Button } from "@/shared/ui/kit";
import { api } from "@/trpc/server";
import { ChangePasswordSchema } from "@/server/api/routers/user";
import { redirect } from "next/navigation";

export function ChangePasswordForm({ error }: { error?: string }) {
  async function changePassword(data: FormData) {
    "use server";

    const parsed = ChangePasswordSchema.safeParse({
      password: data.get("password"),
      newPassword: data.get("password2"),
    });

    if (!parsed.success) {
      redirect(
        `/profile?${new URLSearchParams({
          changePasswordError: parsed.error.errors
            .map((e) => e.message)
            .join(" "),
        })}`,
      );
    }

    const success = await api.user.changePassword.mutate(parsed.data);

    if (!success) {
      redirect(
        `/profile?${new URLSearchParams({
          changePasswordError: "Не удалось изменить пароль",
        })}`,
      );
    }

    redirect("/profile");
  }

  return (
    <div>
      <h2 className="mb-5 text-xl font-semibold">Смена пароля</h2>
      <form action={changePassword}>
        <div className="mb-8 grid grid-cols-[100px,1fr] items-center gap-4">
          <TextField
            type="password"
            label="Старый"
            name="password"
            placeholder="*********"
          />
          <TextField
            type="password"
            label="Новый"
            name="password2"
            placeholder="*********"
          />
        </div>
        <Button
          type="submit"
          variant="primary-dark-bordered"
          className="max-w-xs"
        >
          Сохранить
        </Button>
      </form>
    </div>
  );
}
