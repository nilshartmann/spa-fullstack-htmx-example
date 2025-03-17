import { useSearchParams } from "next/navigation";

export default function usePageSearchParams(page: string | number) {
  const searchParams = useSearchParams();
  const current = new URLSearchParams(searchParams);
  current.set("feedback_page", String(page));

  return current.toString();
}
