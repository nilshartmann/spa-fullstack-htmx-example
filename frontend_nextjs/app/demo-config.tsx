/**
 * Set to -1 to make searching for longer terms FASTER
 * than searching for shorter terms
 * to show discarding of older requests
 */
export const slowDown_search = 1200;

/** number of recipes on /recipes */
export const recipesPerPage = 6;

/** slowdown reading of /recipes */
export const slowDown_GetRecipeList = 0;

/** slowdown increasing likes of a recipe */
export const slowDown_IncreaseLikes = 0;

/** Single recipe on the /$recipeId route */
export const slowDown_GetRecipe = 0;

/** list of feedbacks on /$recipeId */
export const slowDown_GetFeedbacks = 0;

/** delay after submitting the add feedback form */
export const slowDown_AddFeedback = 0;

/** delay after submitting the newsletter form
 * note that there is a default delay of 250ms in the server
 * */
export const slowDown_SubscribeNewsletter = 2500;
