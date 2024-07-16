// Correct the import order and ensure it's at the top
import { NextResponse } from "next/server";

// Export a single middleware function
export function middleware(request) {
  // if (!request.cookies.has("token") || !request.cookies.has("id") )
  //   return NextResponse.redirect(new URL("/login", request.url));

  return NextResponse.next();
}

// Keep the config export as is
export const config = {
  matcher: '/((?!login|register|_next/static|_next/image|favicon.ico).*)',
};