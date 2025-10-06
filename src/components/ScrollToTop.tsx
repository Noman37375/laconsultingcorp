import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type Props = {
  /** scroll behavior: 'auto' or 'smooth' */
  behavior?: ScrollBehavior;
};

export default function ScrollToTop({ behavior = 'smooth' }: Props) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Respect user's reduced motion preference
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const finalBehavior: ScrollBehavior = prefersReduced ? 'auto' : behavior;

    if (typeof window !== 'undefined') {
      // Use scrollTo with behavior for a smooth effect on route changes
      window.scrollTo({ top: 0, behavior: finalBehavior });

      // After scrolling, move focus to the main content for accessibility.
      // When using smooth scrolling, wait a short time for the scroll to finish.
      const delay = finalBehavior === 'smooth' ? 300 : 0;
      const id = window.setTimeout(() => {
        const main = document.querySelector('main') as HTMLElement | null;
        if (main) {
          const hadTab = main.hasAttribute('tabindex');
          const prev = main.getAttribute('tabindex');
          // Ensure element can receive focus
          main.setAttribute('tabindex', '-1');
          main.focus();
          // If the element didn't have a tabindex before, remove the temporary one
          if (!hadTab) {
            if (prev === null) main.removeAttribute('tabindex');
            else main.setAttribute('tabindex', prev);
          }
        }
      }, delay);

      return () => window.clearTimeout(id);
    }
  }, [pathname, behavior]);

  return null;
}
