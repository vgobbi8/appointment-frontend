import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en'
  }
};

export default nextConfig;
