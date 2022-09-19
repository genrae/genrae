/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    ghKey: process.env.GITHUB_TOKEN,
    gistID: process.env.EMAIL_GIST
  },
  webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
      return config;
    }
}


module.exports = nextConfig
