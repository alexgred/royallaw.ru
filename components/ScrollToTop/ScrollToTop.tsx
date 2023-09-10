'use client';

import { useEffect, useRef } from 'react';
import styles from './ScrollToTop.module.css';


export default function Form() {
  const ref = useRef<HTMLDivElement>(null);

  const scrollToTop: Function = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const windowBottom = document.documentElement.offsetHeight - window.innerHeight - 100;

    document.addEventListener('scroll', () => {
      const block: HTMLDivElement = ref.current as HTMLDivElement;

      if (document.documentElement.scrollTop >= windowBottom) {
        block.classList.add(styles.show);
      } else {
        block.classList.remove(styles.show);
      }
    });

    
  }, []);

  return (
    <div ref={ref} className={styles.scroll} onClick={() => scrollToTop()}></div>
  );
}