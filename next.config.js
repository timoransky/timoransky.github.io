/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["holopin.me", "holopin.io"],
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "https://janci.dev",
        permanent: true,
      },
    ];
  },
};
