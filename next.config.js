/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.dropbox.com",
      },
    ],
  },
};

module.exports = nextConfig;
