import { NextResponse } from "next/server";

function decodedToken(token) {
  try {
    return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
  } catch (error) {
    return null;
  }
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("token");

  const needsAuth =
    pathname.startsWith("/map") || pathname.startsWith("/restaurants");

  if (!token && needsAuth) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token) {
    const user = decodedToken(token);

    if (user && user.exp < Date.now() / 1000) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (pathname.startsWith("/login") || pathname.startsWith("/register")) {
      return NextResponse.redirect(new URL("/map", request.url));
    }

    if (needsAuth) {
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}
