import stylesBlock from '../Block.module.css';
import styles from './Contacts.module.css';
import json from '../contacts.json';
import IContacts from '../IContacts';


export default function Contacts() {
  const list: React.ReactNode = json.contacts.map((item: IContacts, index: number) => {
    
    return (
      <div className={`col-xs-6 col-sm-4 ${index === 1 ? 'hidden-xs' : ''}`} key={index}>
        <div className={`text-center ${styles.item}`}>
          <h4 className='email-title contacts-title'>
            {item.title}
          </h4>
          <div className={`${styles.text}`}>
            <a href={item.info.value}>{item.info.label}</a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div id='block-contacts' className={`${styles.contacts} sc-hidden ${stylesBlock.block}`}>
      <div className='container'>
        <div className='block-content'>
          <div className='row'>
            {list}
          </div>
        </div>
      </div>
    </div>
   );
}