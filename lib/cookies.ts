import Cookies from 'js-cookie';

interface CookieOptions {
  expires?: number | Date; // Expiry time
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
}

// Set a cookie
export const setCookie = (name: string, value: string, options?: CookieOptions): void => {
  Cookies.set(name, value, {
    expires: options?.expires || 7, // Default expiry is 7 days
    path: options?.path || '/',
    secure: options?.secure || true, // Set secure flag (useful for HTTPS)
    sameSite: options?.sameSite || 'strict',
    ...options,
  });
};

// Get a cookie value by name
export const getCookie = (name: string): string | undefined => {
  return Cookies.get(name);
};

// Remove a cookie
export const removeCookie = (name: string, options?: CookieOptions): void => {
  Cookies.remove(name, {
    path: options?.path || '/',
    ...options,
  });
};
