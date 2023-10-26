"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webfinger = void 0;
const server_1 = require("next/server");
function webfinger() {
    const username = process.env.NEXTPUB_USERNAME;
    const domain = process.env.NEXTPUB_DOMAIN;
    return new server_1.NextResponse(JSON.stringify({
        subject: `acct:${username}@${domain}`,
        aliases: [`https://${domain}/@${username}`],
        links: [
            {
                rel: `self`,
                type: `application/activity+json`,
                href: `https://${domain}/activitypub/users/${username}`,
            },
        ],
    }), {
        headers: {
            "Content-Type": "application/jrd+json",
        },
    });
}
exports.webfinger = webfinger;
//# sourceMappingURL=webfinger.js.map