/** @type {import('next').NextConfig} */
const nextConfig = {
    // keep your existing config keys here...

    allowedDevOrigins: [
        'https://devserver-main--ishunani-indie.netlify.app',
        'http://localhost:3000',
        'http://localhost:8888',
        // also allow any devserver preview hosts on netlify.app (regex)
        /^https:\/\/devserver-.*\.netlify\.app$/,
    ],
};

module.exports = nextConfig;
