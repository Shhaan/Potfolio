/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Local placeholder/real screenshots are served from /public, so no
    // remote domains need to be whitelisted. Add one here if you ever
    // reference an image hosted elsewhere.
    remotePatterns: []
  }
};

module.exports = nextConfig;
