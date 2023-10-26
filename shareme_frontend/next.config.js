const withVideos = require('next-videos')

module.exports = withVideos({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/a/**',
      },]
}});

//https://lh3.googleusercontent.com/a/ACg8ocJ-Kvm5zWGfBwp0jy-8KjviwD5hG6yGKBBNa18tNw5HwQ=s96-c