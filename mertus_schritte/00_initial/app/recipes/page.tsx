import { fetchRecipes } from "@/app/components/queries.ts";
import { RecipeList } from "@/app/components/recipelistpage/RecipeList.tsx";
import RecipeListPaginationBar from "@/app/components/recipelistpage/RecipeListPaginationBar.tsx";
import RecipeListNavBar from "@/app/components/recipelistpage/RecipeListNavBar.tsx";

type RecipesPageProps = {
  searchParams: Record<string, string>;
};

export default async function RecipesPage({ searchParams }: RecipesPageProps) {
  const recipies = await fetchRecipes(searchParams.page, searchParams.orderBy);

  return (
    <div className={"container mx-auto"}>
      <RecipeListNavBar />
      <RecipeList recipes={recipies} />
      <RecipeListPaginationBar pageable={recipies} params={searchParams} />
    </div>
  );
}
