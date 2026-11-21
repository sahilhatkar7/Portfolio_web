
/** @type {import('next').NextConfig} */

const nextConfig = {
  // Generate static website
  output: "export",

  // GitHub Pages repository path
  basePath: process.env.GITHUB_ACTIONS
    ? "/Portfolio_web"
    : "",

  // Generate static HTML files
  trailingSlash: true,

  // Required for static image export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
