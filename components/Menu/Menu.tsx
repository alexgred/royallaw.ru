'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import styles from './Menu.module.css';

interface Menu {
  link: string;
  label: string;
}

export default function Menu({ links }: { links: Menu[] }) {
  const pathname: string = usePathname();
  
  const menuLinks: React.ReactNode = links.map((item: Menu, index: number) => {

    return (
      <li key={index}>
        <Link className={`${styles.link} ${pathname === item.link ? styles.active : ''}`} href={item.link}>{item.label}</Link>
      </li>
    );
  });

  return (
    <div className={`collapse navbar-collapse ${styles.mainMenu}`}>
      <ul className={`navbar-nav navbar-right ${styles.nav}`}>
        {menuLinks}
      </ul>
    </div>
  );
}