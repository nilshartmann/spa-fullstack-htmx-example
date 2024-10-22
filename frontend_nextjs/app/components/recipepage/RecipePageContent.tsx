import { RecipeBanner } from "./RecipeBanner.tsx";
import { CookingTime } from "./CookingTime.tsx";
import { Instructions } from "./Instructions.tsx";
import { Suspense } from "react";
import LoadingIndicator from "../LoadingIndicator.tsx";
import { AddFeedbackForm } from "./FeedbackForm.tsx";
import { DetailedRecipeDto, PageResponseFeedback } from "../api-types.ts";
import FeedbackListLoader from "./FeedbackListLoader.tsx";
import { Sidebar } from "@/app/components/Sidebar.tsx";
import { H2 } from "@/app/components/Heading.tsx";
import IngredientsSection from "@/app/components/recipepage/IngredientsSection.tsx";

type RecipePageContentProps = {
  recipe: DetailedRecipeDto;
  feedbackPromise: Promise<PageResponseFeedback>;
};

export default function RecipePageContent({
  recipe,
  feedbackPromise,
}: RecipePageContentProps) {
  return (
    <div>
      <RecipeBanner recipe={recipe} />
      <div className={"container mx-auto mb-8 mt-8 md:flex md:space-x-12"}>
        <div className={"md:w-2/3"}>
          <CookingTime
            cookTime={recipe.cookTime}
            preparationTime={recipe.preparationTime}
          />
          <IngredientsSection ingredients={recipe.ingredients} />
          <Instructions recipe={recipe} />
        </div>
        <div className={"md:w-1/3"}>
          <Sidebar>
            <H2>Feedback</H2>
            <Suspense
              fallback={
                <LoadingIndicator>Loading feedback...</LoadingIndicator>
              }
            >
              <FeedbackListLoader
                recipeId={recipe.id}
                feedbackPromise={feedbackPromise}
              />
            </Suspense>
            <AddFeedbackForm recipeId={recipe.id} />
          </Sidebar>
        </div>
      </div>
    </div>
  );
}
