"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
const server_js_1 = require("next/server.js");
const actor_js_1 = require("./activitypub/actor.js");
const webfinger_js_1 = require("./webfinger.js");
function middleware(request) {
    if (request.method === "GET") {
        const res = matchPath(request.nextUrl);
        if (res)
            return res;
    }
}
exports.middleware = middleware;
const matchPath = (url) => {
    console.log(url.pathname);
    if (url.pathname === "/.well-known/webfinger") {
        console.log("matched webfinger");
        return (0, webfinger_js_1.webfinger)();
    }
    const user = new server_js_1.URLPattern({
        pathname: "/activitypub/users/:user",
    }).exec(url);
    if (user) {
        console.log("matched actor");
        return (0, actor_js_1.actor)(user.pathname.groups.user ?? "");
    }
    const resourcePath = new server_js_1.URLPattern({
        pathname: "/activitypub/users/:user/:resource",
    }).exec(url);
    if (resourcePath) {
        const { user, resource } = resourcePath.pathname.groups;
        console.log("matched resource:", resource);
        return new server_js_1.NextResponse(JSON.stringify({
            "@context": "https://www.w3.org/ns/activitystreams",
            type: "OrderedCollection",
            totalItems: 0,
            orderedItems: [],
        }), {
            headers: {
                "Content-Type": "application/jrd+json",
            },
        });
    }
    console.log("no match");
};
//# sourceMappingURL=middleware.js.map