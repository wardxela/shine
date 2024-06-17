import { TextField } from "@/entities/profile";
import { api } from "@/trpc/server";
import { UpdateUserInfoSchema } from "@/server/api/routers/user";
import { redirect } from "next/navigation";
import { Button } from "@/shared/ui/components/button";

export async function UpdateUserInfo({ error }: { error?: string }) {
  const profile = await api.user.me.query();

  async function updateProfile(data: FormData) {
    "use server";

    const parsed = UpdateUserInfoSchema.safeParse({
      name: data.get("name"),
      lastName: data.get("last_name"),
      email: data.get("email"),
      phone: data.get("phone"),
      address: data.get("address"),
    });

    if (!parsed.success) {
      redirect(
        `/profile?${new URLSearchParams({
          updateInfoError: parsed.error.errors.map((e) => e.message).join(" "),
        })}`,
      );
    }

    const success = await api.user.updateInfo.mutate(parsed.data);

    if (!success) {
      redirect(
        `/profile?${new URLSearchParams({
          updateInfoError: "Что-то пошло не-так",
        })}`,
      );
    }

    redirect("/profile");
  }

  return (
    <div>
      <h2 className="mb-5 text-xl font-semibold">Данные аккаунта</h2>
      <form action={updateProfile}>
        <div className="mb-8 grid grid-cols-[100px,1fr] items-center gap-4">
          <TextField
            type="text"
            label="Имя"
            name="name"
            placeholder="Ваше имя"
            defaultValue={profile.name}
          />
          <TextField
            type="text"
            label="Фамилия"
            name="last_name"
            placeholder="Ваша фамилия"
            defaultValue={profile.lastName}
          />
          <TextField
            type="email"
            label="Email"
            name="email"
            placeholder="xxxxxxx@xxxxx.xx"
            defaultValue={profile.email}
          />
          <TextField
            type="tel"
            label="Телефон"
            name="phone"
            placeholder="8-XXX-XXX-XX-XX"
            defaultValue={profile.phone}
          />
          <TextField
            type="text"
            label="Адрес"
            name="address"
            placeholder="Улица, дом, квартира"
            defaultValue={profile.address ?? ""}
          />
        </div>
        <Button type="submit" className="max-w-xs">
          Сохранить
        </Button>
      </form>
    </div>
  );
}
