import styles from './page.module.css';
import Header from '@/components/Header/Header';
import About from '@/components/Block/About/About';
import Contacts from '@/components/Block/Contacts/Contacts';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Contacts />
      </main>
    </>
  );
}
