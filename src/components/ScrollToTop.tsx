import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const previousPathname = useRef<string>('');
  const homeScrollPosition = useRef<number>(0);

  useEffect(() => {
    const servicePages = [
      '/bookkeeping',
      '/vat',
      '/corporation-tax',
      '/payroll',
      '/self-assessment',
      '/company-formation',
      '/uk-address',
      '/virtual-cfo',
      '/bank-account'
    ];

    // If we're leaving the homepage to go to a service page, save the scroll position
    if (previousPathname.current === '/' && servicePages.includes(pathname)) {
      homeScrollPosition.current = window.scrollY;
    }

    // If we're coming back to homepage from a service page, restore the scroll position
    if (pathname === '/' && servicePages.includes(previousPathname.current)) {
      setTimeout(() => {
        window.scrollTo(0, homeScrollPosition.current);
      }, 0);
    } else {
      // For all other navigation, scroll to top
      window.scrollTo(0, 0);
    }

    // Update the previous pathname for next navigation
    previousPathname.current = pathname;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
