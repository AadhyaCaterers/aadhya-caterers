import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Resets the scroll position to top whenever the route changes.
// Mount this once at the top of the app, inside <BrowserRouter>.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
