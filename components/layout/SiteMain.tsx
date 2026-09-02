import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SiteMain({ children }: { children: ReactNode }) {
  return (
    <main id="page" className={cn("page page-category")} data-v-app>
      {children}
    </main>
  );
}
