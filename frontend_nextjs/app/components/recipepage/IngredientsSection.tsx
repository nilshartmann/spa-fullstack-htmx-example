"use client";
import { Ingredient } from "@/app/components/api-types.ts";
import IngredientList from "@/app/components/recipepage/IngredientsList.tsx";
import { useState } from "react";
import PlusButton from "@/app/components/recipepage/PlusButton.tsx";
import MinusButton from "@/app/components/recipepage/MinusButton.tsx";

type IngredientsProps = {
  ingredients: Ingredient[];
};
export default function IngredientsSection({ ingredients }: IngredientsProps) {
  const [servings, setServings] = useState(4);

  // todo:
  //    - Client-Komponente
  //    - state
  //    - Button
  //    - Anzahl Servings
  //    - IngredientList zeigen
  return (
    <>
      <div className={"mb-8 mt-8 flex items-center justify-between"}>
        <h2 className={"font-space text-3xl font-bold"}>Ingredients</h2>
        <div
          className={
            "rounded-lg border border-dotted border-gray-500 p-4 text-lg"
          }
        >
          <MinusButton onClick={() => setServings(servings - 1)} />
          {servings} Servings
          <PlusButton onClick={() => setServings(servings + 1)} />
          {/* Rendern:
            - PlusButton,
            - MinusButton
            - Anzahl Servings
            */}
        </div>
      </div>
      <IngredientList ingredients={ingredients} servings={servings} />
    </>
  );
}
