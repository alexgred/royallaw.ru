import styles from './page.module.css';
import Header from '@/components/Header/Header';
import About from '@/components/Block/About/About';
import Contacts from '@/components/Block/Contacts/Contacts';
import Areas from '@/components/Block/Areas/Areas';
import Form from '@/components/Block/Form/Form';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Areas />
        <Contacts />
        <Form />
      </main>
    </>
  );
}
