import stylesBlock from '../Block.module.css';
import styles from './Form.module.css';

export default function Form() {
  
  return (
    <div id='contacts-form' className={`block-form sc-hidden ${stylesBlock.block}`}>
      <div className='container'>
        <div className={stylesBlock.blockTitle}>
          <h3>Свяжитесь с нами</h3>
        </div>
        <div className={styles.description}>
          <p>Используйте данную форму, для того чтобы задать интересующий вас правовой вопрос, пожалуйста будьте настолько конкретными, на сколько это возможно.</p>
        </div>
        <div className='block-content'>
          <form action='' id='contacts' method='POST' role='form' className={styles.contacts}>
            <div className='form-group name'>
              <input type='text' className={`form-control name ${styles.text}`} name='name' id='name' placeholder='Имя*' required />
            </div>
            <div className='form-group phone-number'>
              <input type='text' className={`form-control phone ${styles.text}`} name='phone-number' id='phone' placeholder='Телефон*' required />
            </div>
            <div className='form-group email'>
              <input type='email' name='email' className={`form-control email ${styles.email}`} id='email' placeholder='E-mail' />
            </div>
            <div className='form-group question'>
              <textarea name='question' id='question' className={`form-control question ${styles.textarea}`} rows={5} placeholder='Вопрос'></textarea>
            </div>

            <button type='submit' className={`${styles.btn} btn-primary `}>Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
}