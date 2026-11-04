import { useLocation } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';

// useLayoutEffect is browser-only; fall back to useEffect while prerendering
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useIsomorphicLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [pathname]);

    return null;
}

export default ScrollToTop;
