module.exports = {
  trailingSlash: false,
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  env: {
    SANITY_PROJECT_ID: process.env.PROJECT_ID,
  },
  images: {
    loader: 'akamai',
    path: '',
  },
}
