import type { CSSProperties } from "react";
import { CategoryFilter } from "@/components/sections/CategoryFilter";
import { CategoryProducts } from "@/components/sections/CategoryProducts";
import { cn } from "@/lib/utils";

const containerStyle = {
  "--position": "sticky",
} as CSSProperties;

export function CategoryContainer() {
  return (
    <>
      <div className={cn("category-container")} style={containerStyle}>
        <CategoryFilter />
        <CategoryProducts />
      </div>
    </>
  );
}
