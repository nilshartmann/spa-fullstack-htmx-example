// todo:
//  1. "Controller-Funktionalität":
//     - Recipes laden mit fetchRecipes()
//     - Rendern mit <RecipeList recipes={recipes} />
//
//  2. Wo wird gerendert, wie sieht HTML aus?
//     - console.log("RENDERED AT", new Date().toISOString());
//
//  3. Was passiert beim Seitenwechsel?
//
//     type RecipesPageProps = {   searchParams: Record<string, string>; };
//
//     - <RecipeListNavBar />
//     - <RecipeListPaginationBar pageable={recipes} params={searchParams} />
//     - "Blättern" vs. "Open in New Tab"
//     - JAVASCRIPT AUSSCHALTEN!

export default async function RecipeListPage() {
  return <div className={"container mx-auto"}>todo</div>;
}
