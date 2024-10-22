import { formatDate } from "../format-date.ts";
import { RatingStars } from "../RatingStars.tsx";
import { PageResponseFeedback } from "../api-types.ts";
import PageLinkButton from "@/app/components/recipepage/PageLinkButton.tsx";

type FeedbackListProps = {
  feedback: PageResponseFeedback;
};
export default function FeedbackList({ feedback }: FeedbackListProps) {
  return (
    <>
      {feedback.content.map((f) => {
        return (
          <div
            key={f.id}
            className={
              "mb-8 rounded-2xl border border-dotted border-gray-300 bg-white pb-8 pe-4 ps-4 pt-4"
            }
          >
            <span className={"font-inter text-gray-500"}>
              <div className={"flex items-end justify-between"}>
                <div className={"font-medium"}>{f.commenter} </div>
                <div className={"text-sm"}>{formatDate(f.createdAt)}</div>
              </div>
              <div className={"mt-1 text-orange_2"}>
                <RatingStars rating={f.rating} />
              </div>
              <div className={"mt-4"}>{f.comment}</div>
            </span>
          </div>
        );
      })}
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
