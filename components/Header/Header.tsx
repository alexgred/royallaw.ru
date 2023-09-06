import styles from './Header.module.css';


export default function Header() {

  return (
    <header className={`${styles.header} sc-hidden`}>
      <div className='container'>
        <div className='text-center'>
          <div className={styles.description}>Юридические услуги для Бизнеса и частных лиц</div>
        </div>
      </div>
    </header>
  );
}