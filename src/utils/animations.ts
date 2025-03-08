import { useEffect, useState, RefObject } from 'react';

export const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  options: IntersectionObserverInit = { threshold: 0.1 }
): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef, options]);

  return isVisible;
};
