/**
 * @type {import('next').NextConfig}
 */
import withPWA from "next-pwa";

// 🟢 Define the base config here
const baseConfig = {
  //reactStrictMode: true,
  // add any other next.js options here
};

// 🟢 Export the final config with PWA plugin
export default withPWA({
  ...baseConfig,
  dest: "public",
  register: true,
  skipWaiting: true,
//  disable: process.env.NODE_ENV === "development",
});
