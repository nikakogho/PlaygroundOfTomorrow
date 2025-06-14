// mdx-components.tsx

// 1. Import the MDXComponents type
import type { MDXComponents } from "mdx/types";

// 2. Import your custom components (paths must be correct from the root)
import { MultipleChoice } from "./src/components/interactive/MultipleChoice";
import { FillInTheBlank } from "./src/components/interactive/FillInTheBlank";
import { Hint } from "./src/components/interactive/Hint";
import { ModuleStep } from "./src/components/ModuleStep";

// 3. Apply the MDXComponents type to the function's parameter and return value
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // The default components passed in by the MDX loader
    ...components,

    // Your custom components that are now globally available in MDX
    ModuleStep,
    Hint,
    MultipleChoice,
    FillInTheBlank,
  };
}