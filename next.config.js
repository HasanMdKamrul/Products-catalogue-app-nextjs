/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: [
      "images.unsplash.com",
      "i.ibb.co",
      "plus.unsplash.com",
      "via.placeholder.com",
    ],
  },
};
