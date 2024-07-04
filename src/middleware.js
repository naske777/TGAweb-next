// Correct the import order and ensure it's at the top
import { NextResponse } from "next/server";

// Export a single middleware function
export function middleware(request) {
  console.error("El usuario no tiene permisos");
  if (!request.cookies.has("session"))
    return NextResponse.redirect(new URL("/login", request.url));

  return NextResponse.next();
}

// Keep the config export as is
export const config = {
  matcher: '/((?!login|_next/static|_next/image|favicon.ico).*)',
};