import { NextResponse } from "next/server";

export function inbox() {
  return new NextResponse(JSON.stringify({}), {
    headers: {
      "Content-Type": "application/jrd+json",
    },
  });
}
