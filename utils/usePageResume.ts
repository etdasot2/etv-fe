import { useEffect, useRef } from 'react';

/**
 * Custom hook to handle page resume events (bfcache, visibility changes)
 * Calls the provided callback when the page is restored from bfcache or becomes visible
 */
export function usePageResume(callback: () => void, dependencies: any[] = []) {
  const debugSessionId = useRef(Math.random().toString(36).substr(2, 9));
  const callbackRef = useRef(callback);
  
  // Keep callback ref up to date
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback, ...dependencies]);

  useEffect(() => {
    const sessionId = debugSessionId.current;
    
    // Handle bfcache (Back-Forward Cache) restore
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        console.log(`[${sessionId}] Page restored from bfcache, triggering refetch`, new Date().toISOString());
        callbackRef.current();
      }
    };

    // Handle visibility change (tab focus, mobile app resume)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        console.log(`[${sessionId}] Page became visible, triggering refetch`, new Date().toISOString());
        callbackRef.current();
      }
    };

    console.log(`[${sessionId}] Setting up page resume listeners`, new Date().toISOString());

    // Add event listeners
    window.addEventListener('pageshow', handlePageShow);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      console.log(`[${sessionId}] Cleaning up page resume listeners`, new Date().toISOString());
      window.removeEventListener('pageshow', handlePageShow);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
}
