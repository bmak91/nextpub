import { NextResponse } from "next/server";

export function actor(user: string) {
  const username = process.env.NEXTPUB_USERNAME;
  const domain = process.env.NEXTPUB_DOMAIN;

  if (username !== user) return;

  return new NextResponse(
    JSON.stringify({
      "@context": `https://www.w3.org/ns/activitystreams`,
      type: `Person`,
      id: `https://${domain}/activitypub/users/${username}`,
      outbox: `https://${domain}/activitypub/users/${username}/outbox`,
      following: `https://${domain}/activitypub/users/${username}/following`,
      followers: `https://${domain}/activitypub/users/${username}/followers`,
      inbox: `https://${domain}/activitypub/users/${username}/inbox`,
      preferredUsername: username,
    }),
    {
      headers: {
        "Content-Type": "application/jrd+json",
      },
    }
  );
}
