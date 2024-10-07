import { ReactNode } from "react";
import RecipesHeader from "../layout/RecipesHeader.tsx";
import { Timer } from "@/app/components/Timer.tsx";

type RecipesPageLayoutProps = {
  children: ReactNode;
};

export function RecipesPageLayout({ children }: RecipesPageLayoutProps) {
  return (
    <>
      <RecipesHeader>{<Timer />}</RecipesHeader>
      <main className={"flex-grow"}>{children}</main>
    </>
  );
}
