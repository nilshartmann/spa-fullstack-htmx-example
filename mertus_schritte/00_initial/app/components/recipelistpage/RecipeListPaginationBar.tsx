import PaginationBar from "@/app/components/PaginationBar.tsx";
import { PageButton } from "@/app/components/Button.tsx";
import Link from "next/link";
import { buildUrl } from "@/app/components/material/build-url.ts";

type RecipeListPaginationBarProps = {
  pageable: {
    totalPages: number;
  };
  params: Record<string, string>;
};

export default function RecipeListPaginationBar({
  pageable,
  params,
}: RecipeListPaginationBarProps) {
  const totalPages = pageable.totalPages; // pageCountPromise.then((t) => t.totalPages);
  const currentPage = parseInt(params.page || "0");

  return (
    <div className={"mt-8 flex justify-center"}>
      <PaginationBar totalPages={totalPages} currentPage={currentPage}>
        {(btn) =>
          btn.disabled ? (
            <PageButton state={btn} />
          ) : (
            <Link href={buildUrl("/recipes", { ...params, page: btn.page })}>
              <PageButton state={btn} />
            </Link>
          )
        }
      </PaginationBar>
    </div>
  );
}
