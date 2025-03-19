import { twMerge } from "tailwind-merge";
import { useServingsStore } from "../../-components/useServingsStore.ts";
import PlusButton from "./PlusButton.tsx";
import MinusButton from "./MinusButton.tsx";

type ServingsWidgetProps = {
  style?: "compact" | "large";
};

export default function ServingsChooser({
  style = "compact",
}: ServingsWidgetProps) {
  const servingsStore = useServingsStore();

  // servingsStore verwenden
  //  PlusButton
  //  MinusButton
  //   (evtl. disablen)
  //
  return (
    <div
      className={twMerge(
        "p-2 text-lg",
        style === "large"
          ? "flex h-full items-center space-x-2 rounded bg-white"
          : "space-x-1 rounded-lg border border-dotted border-gray-500",
      )}
    >
      {style === "large" && (
        <span className={"text-gray-500 "}>Show ingredients for</span>
      )}
      <MinusButton onClick={() => servingsStore.decreaseServings()} />
      {servingsStore.servings} Servings
      <PlusButton onClick={() => servingsStore.increaseServings()} />
      {/*

      todo:

        - servings anzeigen
        - PlusButton
        - MinusButton
          - evtl. disable

      */}
    </div>
  );
}
