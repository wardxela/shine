import { ColorCheckbox } from "@/shared/ui/kit/client";
import { FilterTitle } from "../FilterTitle";

export function ColorsFilter() {
  return (
    <div>
      <FilterTitle className="mb-6">Цвет</FilterTitle>
      <div className="grid grid-cols-[repeat(4,30px)] gap-4">
        <ColorCheckbox color="#fff" isDark />
        <ColorCheckbox color="#f35" />
      </div>
    </div>
  );
}
