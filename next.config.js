/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.tenor.com',
        pathname: '/ZFoOuUSqPBEAAAAi/stalzone-meme.gif',
      },
      {
        protocol: 'https',
        hostname: 'media4.giphy.com',
        pathname: '/media/10QZvWwBUQbpqE/giphy.gif',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        pathname: '/ios/200/menu--v1.png',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        pathname: '/ios/500/search--v1.png'
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        pathname: '/ios/500/download--v1.png'
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        pathname: '/ios/500/arrow--v1.png'
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