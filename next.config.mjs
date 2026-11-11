import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
export default {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.supaimg.com' },
      { protocol: 'https', hostname: 'i.imgur.com' },
      { protocol: 'https', hostname: '*.public.blob.vercel-storage.com' },
    ],
  },
  poweredByHeader: false,
  webpack(config) {
    config.resolve.alias['@'] = root;
    return config;
  },
};
