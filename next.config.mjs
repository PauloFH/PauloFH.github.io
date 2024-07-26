/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/PauloFH' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/PauloFH/' : '',
  trailingSlash: true, // Opcional: Adiciona uma barra no final das URLs
  // Outras configurações que você possa precisar
};

module.exports = nextConfig;