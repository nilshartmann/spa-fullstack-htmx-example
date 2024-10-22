import Label from "@/app/components/Label.tsx";
import RecipeSummaryCard from "@/app/search/RecipeSummaryCard.tsx";
import { Button } from "@/app/components/Button.tsx";
import LoadingIndicator from "@/app/components/LoadingIndicator.tsx";
import { useSearchQuery } from "@/app/search/use-search-query.ts";

type SearchProps = {
  search: string;
};

export default function RecipeSearch({ search }: SearchProps) {
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    hasHits,
    allRecipes,
  } = useSearchQuery(search);

  console.log("RecipeSearch", search);

  if (!hasHits) {
    return <Label>No recipes found.</Label>;
  }

  return (
    <>
      <Label>Recipes for {search}</Label>
      {allRecipes.map((recipe) => (
        <RecipeSummaryCard key={recipe.id} recipe={recipe} />
      ))}
      {hasNextPage && (
        <div className="flex justify-center">
          <Button>
            {isFetchingNextPage ? (
              <LoadingIndicator secondary />
            ) : (
              <button onClick={() => fetchNextPage()}>Find more...</button>
            )}
          </Button>
        </div>
      )}
      {hasNextPage || <Label>No more recipes. Happy cooking!</Label>}
    </>
  );
}
