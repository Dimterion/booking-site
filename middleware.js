import { NextResponse } from "next/server";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  console.log(`Requested page: ${pathname}`);

  return NextResponse.next();
}

export const config = {
  matcher: ["/login"],
};
