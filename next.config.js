/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        // настройки для правильной загрузки картинок с ютуб
        protocol: "https",
        hostname: "i.ytimg.com",
        port: "",
        pathname: "/vi/**"
      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.themoviedb.org',
        port: '',
      },
    ],
    domains: ['source.unsplash.com']
  }
}

module.exports = nextConfig
