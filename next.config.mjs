/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "strapi-maasta-s3.s3.ap-south-1.amazonaws.com",
      "lh3.googleusercontent.com",
      "firebasestorage.googleapis.com",
      "https://firebasestorage.googleapis.com"
    ]
  }
};

export default nextConfig;