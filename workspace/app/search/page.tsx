import { Input } from "@/app/components/Input.tsx";
import Label from "../components/Label";
import { Suspense } from "react";
import LoadingIndicator from "@/app/components/LoadingIndicator.tsx";
import { useDebounce } from "use-debounce";

// const SearchPageParams = z.object({
// 	search: z.string().optional(),
// });

type SearchPageProps = {
  searchParams: {
    search?: string;
  };
};

export default function SearchPage({ searchParams }: SearchPageProps) {
  const [search, setSearch] = useState("");
  const [searchTerm] = useDebounce(search, 200);

  // useRecipifyWindowTitle(searchTerm.length < 3 ? null : searchTerm);

  return (
    <>
      <main className={"flex-grow"}>
        <div className="container mx-auto mt-8 flex max-w-96 pt-8">
          <Input
            type="search"
            name="search"
            autoComplete="off"
            aria-label="Enter at least three chars to start searching for recipes"
            className="h-8 p-6 hover:shadow-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => setSearch("")}
            className="ms-2 cursor-pointer text-gray-500 underline hover:text-gray-900"
          >
            Clear
          </button>
        </div>
        <div className="container mx-auto mt-2 w-1/4 space-y-8 rounded-lg pb-8 pt-8">
          {search.length < 3 ? (
            <Label>Type three letters to start search</Label>
          ) : (
            <Suspense fallback={<LoadingIndicator />}>
              <RecipeSearch search={searchTerm} />
            </Suspense>
          )}
        </div>
      </main>
    </>
  );
}
