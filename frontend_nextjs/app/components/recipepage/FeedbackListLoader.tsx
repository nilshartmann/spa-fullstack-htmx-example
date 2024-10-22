import FeedbackList from "./FeedbackList.tsx";
import { PageResponseFeedback } from "@/app/components/api-types.ts";

type FeedbackListProps = {
  recipeId: string;
  feedbackPromise: Promise<PageResponseFeedback>;
};
export default async function FeedbackListLoader({
  recipeId,
  feedbackPromise,
}: FeedbackListProps) {
  console.log("FeedbackListLoader", Date.now());
  const data = await feedbackPromise;

  return <FeedbackList feedback={data} />;
}
