import { SiteApp } from "@/components/layout/SiteApp";
import { SiteExtras } from "@/components/layout/SiteExtras";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteMain } from "@/components/layout/SiteMain";
import { CategoryBanner } from "@/components/sections/CategoryBanner";
import { CategoryContainer } from "@/components/sections/CategoryContainer";
import { CategoryPromise } from "@/components/sections/CategoryPromise";
import { CategorySort } from "@/components/sections/CategorySort";
import { SiteBreadcrumb } from "@/components/sections/SiteBreadcrumb";

export default function HomePage() {
  return (
    <>
      <SiteApp />
      <SiteHeader />
      <SiteMain>
        <CategoryBanner />
        <CategoryPromise />
        <SiteBreadcrumb />
        <CategorySort />
        <CategoryContainer />
      </SiteMain>
      <SiteFooter />
      <SiteExtras />
    </>
  );
}
