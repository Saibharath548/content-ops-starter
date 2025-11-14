// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    // keep your existing config keys here...
    // e.g. reactStrictMode: true, images: { ... }

    // Allow the Netlify devserver + local dev to load _next assets
    allowedDevOrigins: [
        'https://devserver-main--ishunani-indie.netlify.app', // Netlify preview origin shown in your logs
        'http://localhost:8888',                               // Visual Editor local proxy
        'http://localhost:3000'                                // local Next dev host
    ],
};

module.exports = nextConfig;
