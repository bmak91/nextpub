"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withNextPubConfig = void 0;
function withNextPubConfig(_nextConfig, options) {
    return {
        ..._nextConfig,
        env: {
            ..._nextConfig.env,
            NEXTPUB_USERNAME: options.username,
            NEXTPUB_DOMAIN: options.domain,
        },
    };
}
exports.withNextPubConfig = withNextPubConfig;
//# sourceMappingURL=config.js.map