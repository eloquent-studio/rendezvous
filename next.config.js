/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ui-avatars.com',
                port: '',
                pathname: '/api/**',
            },
            {
                protocol: "https",
                hostname: "maoiproject.s3.eu-central-1.amazonaws.com",
                port: "",
                pathname: "/**",
            },
        ],
    },

}

module.exports = nextConfig
