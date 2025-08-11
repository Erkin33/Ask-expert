// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Статический экспорт в папку /out
  output: "export",

  // Если где-то есть <Image> — чтобы экспорт не падал
  images: { unoptimized: true },

  // Чтобы на шаред-хостинге корректно открывались страницы /about -> /about/index.html
  trailingSlash: true,
};

export default nextConfig;
