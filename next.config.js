/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:["cdn.sanity.io",],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{loader: '@svgr/webpack', options: { icon: true}}]
    })
    return config;
  }
}

module.exports = nextConfig
