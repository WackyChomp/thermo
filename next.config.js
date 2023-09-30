/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.tenor.com',
        port: '',
        pathname: '/ZFoOuUSqPBEAAAAi/stalzone-meme.gif',
      },
      {
        protocol: 'https',
        hostname: 'media4.giphy.com',
        port: '',
        pathname: '/media/10QZvWwBUQbpqE/giphy.gif',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/ios/200/menu--v1.png',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/ios/500/search--v1.png'
      },
      // {
      //   protocol: '',
      //   hostname: '',
      //   port: '',
      //   pathname: '',
      // },
    ],
  },
}