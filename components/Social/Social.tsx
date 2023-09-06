import styles from './Social.module.css';

interface Social {
  class: string;
  link: string;
}

export default function Social({ links }: { links: Social[] }) {
  const list = links.map((item: Social, index: number) => {

    return (
      <a href={item.link} className={`${styles.icon} ${styles[item.class]}`} key={index}></a>
    )
  })

  return (
    <div className='social-links'>
      {list}
    </div>
  );
}