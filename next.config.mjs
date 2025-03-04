import './env.mjs'

const ContentSecurityPolicy = `
  default-src 'self' vercel.live;
  script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com vercel.live va.vercel-scripts.com; 
  style-src 'self' 'unsafe-inline';
  frame-src *;
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src 'self';
`.replace(/\n/g, '')

const securityHeaders = [
  { key: 'Content-Security-Policy', value: ContentSecurityPolicy },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  headers: async () => [{ source: '/(.*)', headers: securityHeaders }],
  images: {
    domains: [
      'public.blob.vercel-storage.com',
      'res.cloudinary.com',
      'abs.twimg.com',
      'pbs.twimg.com',
      'avatars.githubusercontent.com',
      'www.google.com',
      'flag.vercel.app',
      'illustrations.popsy.co',
    ],
  },
}

export default nextConfig
