/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.pdf$/,
        use: 'file-loader?name=[path][name].[ext]',
      });
    }

    return config;
  },
};

module.exports = nextConfig;