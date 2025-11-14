/** @type {import('next').NextConfig} */
const nextConfig = {
    // other config keys...

    allowedDevOrigins: [
        'https://devserver-main--ishunani-indie.netlify.app',
        'http://localhost:3000',
        'http://localhost:8888',
    ],
};

module.exports = nextConfig;
