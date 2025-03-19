import { fetchFeedback, fetchRecipe } from "@/app/components/queries.ts";
import { RecipeBanner } from "@/app/components/recipepage/RecipeBanner.tsx";
import { notFound } from "next/navigation";
import RecipeDetails from "@/app/components/recipepage/RecipeDetails.tsx";
import TwoColumnLayout from "@/app/components/layout/TwoColumnLayout.tsx";
import { Sidebar } from "@/app/components/Sidebar.tsx";
import FeedbackList from "@/app/components/recipepage/FeedbackList.tsx";
import { Suspense } from "react";
import LoadingIndicator from "@/app/components/LoadingIndicator.tsx";

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
  // todo: fetchRecipe
  //  -> wenn nicht vorhanden, notFound()
  //  Ergebnis:
  //   <RecipeBanner />
  //   <RecipeDetails />

  const feedbackPromise = fetchFeedback(
    params.recipeId,
    searchParams.feedback_page,
  );
  const response = await fetchRecipe(params.recipeId);

  if (!response) {
    notFound();
  }

  return (
    <div>
      <RecipeBanner recipe={response.recipe} />
      <TwoColumnLayout
        sidebar={
          <Sidebar>
            <Suspense fallback={<LoadingIndicator />}>
              <FeedbackList feedbackPromise={feedbackPromise} />
            </Suspense>
          </Sidebar>
        }
      >
        <RecipeDetails recipe={response.recipe} />
      </TwoColumnLayout>
    </div>
  );

  return <div>Recipe {params.recipeId}</div>;
}
