/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bekaa.eu',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
