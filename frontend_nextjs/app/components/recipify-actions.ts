"use server";

import { increaseLikes } from "@/app/components/material/recipe-actions.ts";
import {
  fetchFromApi,
  getEndpointConfig,
} from "@/app/components/fetch-from-api.ts";
import { slowDown_SubscribeNewsletter } from "@/app/nextjs-demo-config.tsx";

type HandleIncreaseLikeActionState = {
  recipeId: string;
  likes: number;
};

export async function handleIncreaseLike({
  recipeId,
}: HandleIncreaseLikeActionState) {
  // Likes in DB o.ä. speichern
  const { newLikes: likes } = await increaseLikes(recipeId);

  // Aktualisierte Daten (!) zum Client
  return {
    recipeId,
    likes,
  };
}

export async function subscribeToNewsletter(email: string) {
  await fetchFromApi(getEndpointConfig("post", "/api/newsletter/subscribe"), {
    body: {
      email,
    },
    query: {
      slowdown: slowDown_SubscribeNewsletter,
    },
  });

  // assume this always works
}
