/** @type {import('next').NextConfig} */
// const withTM = require("next-transpile-modules")([
//   "@ant-design/icons",
//   "@ant-design/icons-svg",
// ]);
const nextConfig = {
    env: {
        development: 'http://localhost:5555',
        production: 'https://lms-be.up.railway.app',
    },
    reactStrictMode: true,
    // webpack: (config, { isServer }) => {
    //   // Only include the SVGR webpack loader on the client-side
    //   if (!isServer) {
    //     config.module.rules.push({
    //       test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    //       use: [
    //         {
    //           loader: "@svgr/webpack",
    //           options: {
    //             babel: false,
    //             icon: true,
    //           },
    //         },
    //       ],
    //     });
    //   }

    //   return config;
    // },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/login',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
