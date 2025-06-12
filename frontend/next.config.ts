import type { NextConfig } from "next";
import mdx from "@next/mdx";

const withMDX = mdx();

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

export default withMDX(nextConfig);
