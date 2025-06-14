import type { MDXComponents } from "mdx/types";
import { MultipleChoice } from "./src/components/interactive/MultipleChoice";
import { FillInTheBlank } from "./src/components/interactive/FillInTheBlank";
import { Hint } from "./src/components/interactive/Hint";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    
    MultipleChoice,
    FillInTheBlank,
    Hint
  };
}