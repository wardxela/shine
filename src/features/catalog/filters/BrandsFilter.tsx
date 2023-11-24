import { Checkbox } from "@/shared/ui/kit";
import { FilterTitle } from "../FilterTitle";

export function BrandsFilter() {
  return (
    <div>
      <FilterTitle className="mb-6">Бренды</FilterTitle>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Checkbox label="Gucci" />
          <span className="text-sm">24</span>
        </div>
      </div>
    </div>
  );
}
