/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/PauloFH' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/PauloFH/' : '',
  trailingSlash: true, 
};

export default nextConfig;