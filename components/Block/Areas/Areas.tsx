import stylesBlock from '../Block.module.css';
import styles from './Areas.module.css';
import json from './Areas.json';


interface Content {
  title: string;
  text: string;
}


export default function Areas() {
  const list: React.ReactNode = json.content.map((item: Content, index: number) => {
    
    return (
      <div className='col-xs-12 col-sm-6 col-lg-3' key={index}>
        <div className={styles.item}>
          <div className={styles.title}>
            {item.title}
          </div>
          <div className={styles.description}>
            {item.text}
          </div>
        </div>
      </div>
    );
  })

  return (
    <div className={`sc-hidden ${stylesBlock.block} ${styles.areas}`}>
      <div className='container'>
        <div className={stylesBlock.blockTitle}>
          <h3>Сферы практики</h3>
        </div>
        <div className='block-content'>
          <div className='row'>
            {list}
          </div>
        </div>
      </div>
    </div>
  );
}
