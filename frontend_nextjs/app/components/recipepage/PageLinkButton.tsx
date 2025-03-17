"use client";
import Link from "next/link";
import usePageSearchParams from "@/app/components/recipepage/usePageSearchParams.ts";

type PageLinkButtonProps = {
  page: number;
  label: string;
};

export default function PageLinkButton({ page, label }: PageLinkButtonProps) {
  const searchParams = usePageSearchParams(page);

  return (
    <Link
      className={"PageLinkButton"}
      replace={true}
      href={{
        query: searchParams,
      }}
    >
      {label}
    </Link>
  );
}
