import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Skip type checking during build - it will still happen in your IDE
  typescript: {
    ignoreBuildErrors: true,
  },
  // Skip ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: false,
    };
    
    config.resolve.alias = {
      ...config.resolve.alias,
      '@react-native-async-storage/async-storage': false,
      'react-native': false,
    };
    
    return config;
  },
};

export default nextConfig;