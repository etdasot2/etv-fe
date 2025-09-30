import cookie from 'js-cookie';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

export function saveToken(accessToken: string) {
  cookie.set('authToken_v2', accessToken, {
    expires: 365, // 1 day expiration (adjust as needed)
    secure: process.env.NODE_ENV === 'production', // Use secure flag in production
    sameSite: 'strict',
    path: '/',
  });
}

export function getToken(): string | undefined {
  return cookie.get('authToken_v2');
}

export function removeToken() {
  cookie.remove('authToken_v2', { path: '/' });
  removeUser(); // Also remove user information when logging out
}

export function saveUser(user: any) { // Replace `any` with the appropriate type if possible
  cookie.set('user_v2', JSON.stringify(user), {
    expires: 365, // Set expiration, same as the token or adjust accordingly
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
  });
}

export function getUser(): any | null { // Replace `any` with the appropriate type
  const user = cookie.get('user_v2');
  return user ? JSON.parse(user) : null;
}

export function removeUser() {
  cookie.remove('user_v2', { path: '/' });
}
