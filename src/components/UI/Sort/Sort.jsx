import styles from './Sort.module.css';

const Sort = () => {
    return ( 
        <div className={styles.block}>
        <div className={styles.block__img}>
            <img src="/sort.svg" alt="" />
        </div>
        <div className={styles.text}>
            <p>Сортировка по</p>
            <p>По умолчанию</p>
        </div>
        <div className={styles.arrow}>
            <img src="/icon10.svg" alt="" />
        </div>
    </div>
     );
}
 
export default Sort;