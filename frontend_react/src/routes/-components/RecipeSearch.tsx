import Label from "../recipes/-components/Label.tsx";
import { useSearchQuery } from "../../components/use-queries.ts";
import RecipeSummaryCard from "./RecipeSummaryCard.tsx";
import { Button } from "../../components/Button.tsx";
import LoadingIndicator from "../../components/LoadingIndicator.tsx";

type SearchProps = {
  search: string;
};

export default function RecipeSearch({ search }: SearchProps) {
  // TanStack Query
  const {
    hasHits,
    allRecipes,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useSearchQuery(search);

  if (!hasHits) {
    return <Label>No recipes found.</Label>;
  }

  // todo:
  //   hasNextPage, isFetchingNextPage und fetchNetPage verwenden:
  //   <Button> rendern ODER "No more recipes. Happy cooking!"
  //   Button-Label <LoadingIndicator secondary /> oder FindMode

  return (
    <>
      <Label>Recipes for {search}</Label>
      {allRecipes.map((recipe) => (
        <RecipeSummaryCard key={recipe.id} recipe={recipe} />
      ))}

      {hasNextPage ? (
        <Button>
          {isFetchingNextPage ? (
            <LoadingIndicator />
          ) : (
            <button onClick={() => fetchNextPage()}>Fetch more</button>
          )}
        </Button>
      ) : (
        <span>No more recipes!</span>
      )}
    </>
  );
}
