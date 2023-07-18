/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env:{
    NEXT_PUBLIC_ZEGO_APP_ID: 896355367,
    NEXT_PUBLIC_ZEGO_SERVER_ID: "5b4a08b33ef762843aef2f29c96cd186"
  },
  images:{
    domains:["localhost"]
    },
  }

module.exports = nextConfig;
