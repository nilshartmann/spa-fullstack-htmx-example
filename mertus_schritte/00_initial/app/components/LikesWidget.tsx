import { RecipeDto } from "@/app/components/api-types.ts";
import { twMerge } from "tailwind-merge";

type LikesWidgetProps = {
  recipe: RecipeDto;
};

export function LikesWidget({ recipe }: LikesWidgetProps) {
  return (
    <button
      className={twMerge(
        "me-2 inline-block rounded border border-orange_2 bg-white p-2 text-[15px] text-orange_2 hover:cursor-pointer hover:bg-orange_2 hover:text-white",
      )}
    >
      <i className="fa-regular fa-heart mr-2"></i>
      {recipe.likes}
    </button>
  );
}
