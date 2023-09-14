import styles from './Filter.module.css';

const Filter = () => {
    return ( 
        <div className={styles.block}>
            <div className={styles.img}>
                <img src="/icon11.svg" alt="" />
            </div>
            <div className={styles.text}>
                <p>Фильтр периода</p>
                <p>17 Апрель 2023 - 21 Август 2023</p>
            </div>
            <div className={styles.arrow}>
                <img src="/icon10.svg" alt="" />
            </div>
        </div>
     );
}
 
export default Filter;