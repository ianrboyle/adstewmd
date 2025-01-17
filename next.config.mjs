/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.adriennestewartmd.com",
        port: "",
        pathname: "/wp-content/uploads/2024/09/**",
      },
    ],
  },
};

export default nextConfig;
