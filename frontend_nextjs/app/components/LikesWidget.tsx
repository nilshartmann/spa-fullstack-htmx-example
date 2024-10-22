"use client";
import { RecipeDto } from "@/app/components/api-types.ts";
import { twMerge } from "tailwind-merge";
import { useActionState } from "react";
import { likeRecipeAction } from "@/app/components/like-action.ts";
import { LikeIndicator } from "@/app/components/LoadingIndicator.tsx";

type LikesWidgetProps = {
  recipe: RecipeDto;
};

export function LikesWidget({ recipe }: LikesWidgetProps) {
  const [state, action, pending] = useActionState(likeRecipeAction, {
    recipeId: recipe.id,
    likes: recipe.likes,
  });

  return (
    <form action={action} className={"inline-block"}>
      <button
        type={"submit"}
        disabled={pending}
        className={twMerge(
          "me-2 flex space-x-2 rounded border border-orange_2 bg-white p-2 text-[15px] text-orange_2 hover:cursor-pointer hover:bg-orange_2 hover:text-white disabled:cursor-default disabled:border-gray-900 disabled:bg-gray-300 disabled:text-gray-900 disabled:hover:text-gray-900",
        )}
      >
        <span>{state.likes}</span>
        {pending ? (
          <LikeIndicator />
        ) : (
          <span>
            <i className="fa-regular fa-heart mr-2"></i>
          </span>
        )}
      </button>
    </form>
  );
}
