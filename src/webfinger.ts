import { NextResponse } from "next/server";

export function webfinger() {
  const username = process.env.NEXTPUB_USERNAME;
  const domain = process.env.NEXTPUB_DOMAIN;

  return new NextResponse(
    JSON.stringify({
      subject: `acct:${username}@${domain}`,
      aliases: [`https://${domain}/@${username}`],
      links: [
        {
          rel: `self`,
          type: `application/activity+json`,
          href: `https://${domain}/activitypub/users/${username}`,
        },
      ],
    }),
    {
      headers: {
        "Content-Type": "application/jrd+json",
      },
    }
  );
}
