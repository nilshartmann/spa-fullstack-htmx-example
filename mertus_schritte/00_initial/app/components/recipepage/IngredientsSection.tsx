import { Ingredient } from "@/app/components/api-types.ts";
import IngredientList from "@/app/components/recipepage/IngredientsList.tsx";

type IngredientsProps = {
  ingredients: Ingredient[];
  defaultServings: number;
};
export default function IngredientsSection({
  ingredients,
  defaultServings,
}: IngredientsProps) {
  return (
    <>
      <div className={"mb-8 mt-8 flex items-center justify-between"}>
        <h2 className={"font-space text-3xl font-bold"}>Ingredients</h2>
      </div>
      <IngredientList ingredients={ingredients} servings={defaultServings} />
    </>
  );
}
