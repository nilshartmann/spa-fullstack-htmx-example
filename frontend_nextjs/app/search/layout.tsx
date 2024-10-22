import { ReactNode } from "react";
import { RecipesPageLayout } from "@/app/components/material/RecipesPageLayout.tsx";

type RecipesLayoutProps = {
  children: ReactNode;
};

export default function SearchLayout({ children }: RecipesLayoutProps) {
  return <RecipesPageLayout>{children}</RecipesPageLayout>;
}
