import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(process.env.ENC_MAIN);

// List of protected routes
const protectedRoutes = [
  '/company-profile',
  '/for-you',
  '/friends',
  '/inbox',
  '/offical-website',
  '/packages',
  '/platform-rules',
  '/tutorials',
  '/home',
  '/invite',
  '/member-point',
  '/my-team',
  '/profile',
  '/recharge',
  '/record',  
  '/set-funds-password',
  '/social-media',
  '/task',
  '/team',
  '/transfer',
  '/unreleased',
  '/verify-funds-password',
  '/wallet',
  '/withdraw'
];
const publicRoutes = ['/login', '/forget-password', '/join', '/terms'];

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('authToken')?.value;

  console.log('Token:', token);  // Debugging

  // Handle protected routes
  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    if (!token) {
      console.log('No token found, redirecting to signin');
      return NextResponse.redirect(new URL('/login', req.url));
    }

    try {
      await jwtVerify(token, JWT_SECRET);
      console.log('Token valid, proceeding');
      return NextResponse.next();
    } catch (err) {
      console.log('Token invalid, redirecting to signin:', err);
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  // Handle public routes (signin/signup) when user is already logged in
  if (publicRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    if (token) {
      try {
        await jwtVerify(token, JWT_SECRET);
        console.log('User already logged in, redirecting to home');
        return NextResponse.redirect(new URL('/home', req.url));
      } catch (err) {
        console.log('Token invalid on public route, allowing access:', err);
        // If token is invalid, allow access to the signin/signup page
        return NextResponse.next();
      }
    }
  }

  // Default behavior: Proceed as usual
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
 

