// next.config.js

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  env: {
    NEXT_PUBLIC_AI21_API_KEY: process.env.NEXT_PUBLIC_AI21_API_KEY,
  },
  /* Agrega otras opciones de configuración aquí, si es necesario */
};

module.exports = nextConfig;
