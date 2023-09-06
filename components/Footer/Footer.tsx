import styles from './Footer.module.css';
import json from './Footer.json';
import Social from '../Social/Social';

export default function Footer() {

  return (
    <footer className={`${styles.footer} sc-hidden`}>
      <div className={styles.footerBottom}>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-6'>
              <div className='text-left'>
                <div className='copyright'>
                  &copy; 2019 Royal Law
                </div>
                <div className={styles.developer}>
                  <a href='mailto:alexgred.dev@gmail.com'>Разработка сайта</a>
                </div>
              </div>
            </div>
            <div className='col-xs-6'>
              <div className='text-right'>
                <Social links={json.links} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}