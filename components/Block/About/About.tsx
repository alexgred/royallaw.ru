import stylesBlock from '../Block.module.css';
import styles from './About.module.css';
import json from '../contacts.json';
import IContacts from '../IContacts';


export default function About() {
  const list: React.ReactNode = json.contacts.map((item: IContacts, index: number) => {
    
    return (
      <div className={styles.item} key={index}>
        <div className={styles.title}>
          {item.title}
        </div>
        <div className={styles.info}>
          <a href={item.info.value}>{item.info.label}</a>
        </div>
      </div>
    );
  })
  
  return(
    <div className={`block-about sc-hidden ${stylesBlock.block}`}>
      <div className='container'>
        <div className={stylesBlock.blockTitle}>
          <h2>О нас</h2>
        </div>
        <div className='block-content'>
          <div className='row'>
            <div className='col-xs-12 col-sm-8'>
              <p>Для нас главной задачей является достижение целей и интересов наших клиентов. И этому способствует неукоснительное соблюдение нами основных принципов нашей работы:</p>
              <ul className={styles.list}>
                <li>Индивидуальный подход к каждому Клиенту;</li>
                <li>предоставление Клиентам полной и достоверной информации для совместного принятия решений;</li>
                <li>работа на результат.</li>
              </ul>
              <p>Качество оказываемой правовой помощи всегда высоко ценилось на рынке юридических услуг, для того чтобы оправдывать ожидания наших клиентов мы непрерывно осуществляем мониторинг изменений законодательства и работаем с оглядкой на грядущие новеллы.</p>
              <p>В отношении наших услуг мы предлагаем гибкую ценовую политику, что сделало предоставление юридических услуг доступнее как для компаний и индивидуальных предпринимателей, так и для физических лиц. Но самое главное, что при снижении стоимости услуг мы не снижаем их качества!</p>
              <p>Мы также четко придерживаемся политики конфиденциальности по отношению к нашим клиентам. Задать интересующие вопросы можно прямо сейчас. Просто заполните форму обратной связи и получите помощь юриста в самые короткие сроки.</p>
            </div>
            <div className='col-xs-12 col-sm-4'>
              <div className={stylesBlock.blockContact}>
                {list}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}