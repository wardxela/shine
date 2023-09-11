"use client";

import { SliderRange } from "@/shared/ui/kit/client";
import { useState } from "react";

export function PriceFilter() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(2000);

  return (
    <SliderRange
      min={0}
      max={2000}
      minCur={min}
      maxCur={max}
      onMinChange={setMin}
      onMaxChange={setMax}
    />
  );
}
