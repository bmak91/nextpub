import { NextRequest, NextResponse, URLPattern } from "next/server.js";
import { actor } from "./activitypub/actor.js";
// import { inbox } from "./activitypub/inbox";
import { NextURL } from "next/dist/server/web/next-url.js";
import { webfinger } from "./webfinger.js";

export function middleware(request: NextRequest) {
  if (request.method === "GET") {
    const res = matchPath(request.nextUrl);
    if (res) return res;
  }
}

const matchPath = (url: NextURL) => {
  console.log(url.pathname);

  if (url.pathname === "/.well-known/webfinger") {
    console.log("matched webfinger");
    return webfinger();
  }

  const user = new URLPattern({
    pathname: "/activitypub/users/:user",
  }).exec(url);

  if (user) {
    console.log("matched actor");
    return actor(user.pathname.groups.user ?? "");
  }

  const resourcePath = new URLPattern({
    pathname: "/activitypub/users/:user/:resource",
  }).exec(url);

  if (resourcePath) {
    const { user, resource } = resourcePath.pathname.groups;

    console.log("matched resource:", resource);
    return new NextResponse(
      JSON.stringify({
        "@context": "https://www.w3.org/ns/activitystreams",
        type: "OrderedCollection",
        totalItems: 0,
        orderedItems: [],
      }),
      {
        headers: {
          "Content-Type": "application/jrd+json",
        },
      }
    );
  }

  console.log("no match");
};
