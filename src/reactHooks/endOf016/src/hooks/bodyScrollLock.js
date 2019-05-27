import { useLayoutEffect } from 'react';

function useBodyScrollLock() {
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
  });
}

export { useBodyScrollLock };
