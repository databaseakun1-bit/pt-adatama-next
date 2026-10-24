/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // Languages: English (default, no prefix), Indonesian /id, Arabic /ar, Chinese /zh
    locales: ["en", "id", "ar", "zh"],
    defaultLocale: "en",
    // false = never auto-redirect by browser language; visitors pick with the language button
    localeDetection: false,
  },
};

module.exports = nextConfig;
