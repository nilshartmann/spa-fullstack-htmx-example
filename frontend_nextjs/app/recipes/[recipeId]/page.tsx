import { fetchFeedback, fetchRecipe } from "@/app/components/queries.ts";
import RecipePageContent from "@/app/components/recipepage/RecipePageContent.tsx";
import { notFound } from "next/navigation";

type RecipePageProps = {
  searchParams: {
    feedback_page?: string;
  };
  params: {
    recipeId: string;
  };
};

export default async function RecipePage({
  params,
  searchParams,
}: RecipePageProps) {
  const feedbackPage = parseInt(searchParams.feedback_page || "0");

  const feedbackPromise = fetchFeedback(params.recipeId, feedbackPage);

  const recipe = await fetchRecipe(params.recipeId);

  if (!recipe) {
    notFound();
  }

  return (
    <RecipePageContent
      recipe={recipe.recipe}
      feedbackPromise={feedbackPromise}
    />
  );
}
