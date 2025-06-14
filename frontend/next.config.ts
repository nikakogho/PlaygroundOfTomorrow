import type { NextConfig } from "next";
import nextMdx from "@next/mdx";
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    // These plugins are correct and should remain.
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [],
    // The problematic `providerImportSource` option has been REMOVED.
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

export default withMDX(nextConfig);