import FeedbackList from "./FeedbackList.tsx";

type FeedbackListProps = {
  recipeId: string;
};
export default async function FeedbackListLoader({
  recipeId,
}: FeedbackListProps) {
  console.log("FeedbackListLoader", Date.now());

  // Diese Komponente wird auf dem SERVER (!) gerendert
  //
  // todo: Daten laden
  //
  // const data = await fetchFeedback(recipeId);
  const data = { feedbacks: [] };

  return <FeedbackList feedbacks={data.feedbacks} />;
}
