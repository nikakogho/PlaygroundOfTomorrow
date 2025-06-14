import type { MDXComponents } from "mdx/types";
import { ModuleStep } from "./src/components/ModuleStep";
import { MultipleChoice } from "./src/components/interactive/MultipleChoice";
import { FillInTheBlank } from "./src/components/interactive/FillInTheBlank";
import { Hint } from "./src/components/interactive/Hint";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    
    ModuleStep,
    MultipleChoice,
    FillInTheBlank,
    Hint
  };
}