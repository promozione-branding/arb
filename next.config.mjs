/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
 images: {
    unoptimized: true, // Important for Next 15 static images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    localPatterns: [
      {
        pathname: "/**", // allow ALL public images
        search: "",
      },
    ],
  },
};

export default nextConfig;
