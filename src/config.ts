import { NextConfig } from "next";

interface NextPubOptions {
  username: string;
  domain: string;
}

export function withNextPubConfig(
  _nextConfig: NextConfig,
  options: NextPubOptions
): NextConfig {
  return {
    ..._nextConfig,
    env: {
      ..._nextConfig.env,
      NEXTPUB_USERNAME: options.username,
      NEXTPUB_DOMAIN: options.domain,
    },
  };
}
