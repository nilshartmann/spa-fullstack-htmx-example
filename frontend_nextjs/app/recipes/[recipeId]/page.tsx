import { fetchFeedback, fetchRecipe } from "@/app/components/queries.ts";
import { notFound } from "next/navigation";
import { RecipeBanner } from "@/app/components/recipepage/RecipeBanner.tsx";
import TwoColumnLayout from "@/app/components/layout/TwoColumnLayout.tsx";
import RecipeDetails from "@/app/components/recipepage/RecipeDetails.tsx";
import { H2 } from "@/app/components/Heading.tsx";
import { Sidebar } from "@/app/components/Sidebar.tsx";
import { AddFeedbackForm } from "@/app/components/recipepage/FeedbackForm.tsx";
import FeedbackList from "@/app/components/recipepage/FeedbackList.tsx";
import LoadingIndicator from "@/app/components/LoadingIndicator.tsx";
import { Suspense } from "react";

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

  const response = await fetchRecipe(params.recipeId);

  if (!response) {
    notFound();
  }

  const recipe = response.recipe;

  return (
    <div>
      <RecipeBanner recipe={recipe} />

      <TwoColumnLayout
        sidebar={
          <Sidebar>
            <H2>Feedback</H2>
            <Suspense
              fallback={
                <LoadingIndicator>Loading feedback...</LoadingIndicator>
              }
            >
              <FeedbackList feedbackPromise={feedbackPromise} />
            </Suspense>
            <AddFeedbackForm recipeId={recipe.id} />
          </Sidebar>
        }
      >
        <RecipeDetails recipe={recipe} />
      </TwoColumnLayout>
    </div>
  );
}
