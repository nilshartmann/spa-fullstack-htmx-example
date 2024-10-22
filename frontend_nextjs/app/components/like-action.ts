"use server";

import { saveLikeToDb } from "@/app/components/queries.ts";
import { revalidatePath } from "next/cache";

type LikeActionState = {
  recipeId: string;
  likes: number;
};

export async function likeRecipeAction({
  recipeId,
}: LikeActionState): Promise<LikeActionState> {
  const response = await saveLikeToDb(recipeId);
  revalidatePath("/recipes");

  return {
    recipeId,
    likes: response.newLikes,
  };
}
