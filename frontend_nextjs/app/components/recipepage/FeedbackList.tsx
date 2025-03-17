import { formatDate } from "../format-date.ts";
import { RatingStars } from "../RatingStars.tsx";
import { Feedback, PageResponseFeedback } from "../api-types.ts";
import PageLinkButton from "@/app/components/recipepage/PageLinkButton.tsx";

type FeedbackListProps = {
  feedbackPromise: Promise<PageResponseFeedback>;
};
export default async function FeedbackList({
  feedbackPromise,
}: FeedbackListProps) {
  const feedback = await feedbackPromise;

  return (
    <>
      {feedback.content.map((f) => (
        <FeedbackBox key={f.id} feedback={f} />
      ))}
      <div className="flex w-full justify-center space-x-12">
        {feedback.hasPrevious && (
          <PageLinkButton page={feedback.pageNumber - 1} label={"<"} />
        )}
        {feedback.hasNext && (
          <PageLinkButton page={feedback.pageNumber + 1} label={">"} />
        )}
      </div>
    </>
  );
}

type FeedbackBoxProps = {
  feedback: Feedback;
};
function FeedbackBox({ feedback }: FeedbackBoxProps) {
  return (
    <div
      className={
        "mb-8 rounded-2xl border border-dotted border-gray-300 bg-white pb-8 pe-4 ps-4 pt-4"
      }
    >
      <span className={"font-inter text-gray-500"}>
        <div className={"flex items-end justify-between"}>
          <div className={"font-medium"}>{feedback.commenter} </div>
          <div className={"text-sm"}>{formatDate(feedback.createdAt)}</div>
        </div>
        <div className={"mt-1 text-orange_2"}>
          <RatingStars rating={feedback.rating} />
        </div>
        <div className={"mt-4"}>{feedback.comment}</div>
      </span>
    </div>
  );
}
