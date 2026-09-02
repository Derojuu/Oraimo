import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

const mainStyle = {
  paddingTop: "inherit",
} as CSSProperties;

export function SiteMain({ children }: { children: ReactNode }) {
  return (
    <>
      <main
        id="page"
        className={cn("page page-category")}
        data-v-app
        style={mainStyle}
      >
        {children}
      </main>
    </>
  );
}
