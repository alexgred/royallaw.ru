import Image from 'next/image';
import Menu from '../Menu/Menu';
import styles from './Navigation.module.css';
import image from '@/assets/images/logo.png';
import json from './Navigation.json';

export default function Navigation() {

  return (
    <nav className={`navbar navbar-default navbar-fixed-top sc-hidden ${styles.navbar}`} role='navigation'>
      <div className='container'>
        <a className='navbar-brand' href='/'></a>
        <div className={styles.logoBlock}>
          <a className={styles.link} href='/'>
            <Image
              className={styles.image}
              src={image}
              alt='logo'
              width={77}
              height={90}
              priority
            />
          </a>
        </div>
        <div className={styles.siteNameBlock}>
          <div className={styles.siteName}>
            <h1 className={styles.title}>Royal Law</h1>
          </div>
        </div>
        <Menu links={json.links} />
      </div>
    </nav>
  );
}